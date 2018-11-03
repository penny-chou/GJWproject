import React,{Component} from 'react';
import './index.scss';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import ReactDOM from 'react-dom';
import { Tabs, WhiteSpace,Badge,PullToRefresh, Button } from 'antd-mobile';

// 小红星
var getStar = (num)=>{
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(<img src="/comment_good.png" key={i}/>)
	}
	return arr;
}
class Evaluation extends Component{
	constructor(props){
		super(props);
		this.state = {
			all_eva:0, 
			score:[],
			haoping:0,
			zhongping:0,
			chaping:0,
			shaitu:0,
			haopinglv:0,
			datalist:[],
			datalist2:[],//中评
			datalist3:[],//差评
			datalist4:[],//晒图
			pageIndex:1,
			refreshing: false,
			down: true,
			height: document.documentElement.clientHeight,
		}
	}

	componentWillMount(){
		axios.get('/BtCApi/Item/GetProductCount?proid=1').then(res=>{
			this.setState({
				all_eva:res.data.data.Count,
				score:res.data.data.Score
			})
			this.state.score.map(item=>{
				// 差评
				if(item.DescriptionScore == 0){
					this.setState({
						chaping:item.Counts
					})
				}
				// 好评
				if(item.DescriptionScore == 4||item.DescriptionScore == 5){
					this.setState({
						haoping:this.state.haoping+item.Counts,
					})
				}
				// 晒图
				if(item.DescriptionScore == 4){
					this.setState({
						shaitu:item.Counts
					})
				}
				// 中评
				if(item.DescriptionScore == 2){
					this.setState({
						zhongping:item.Counts
					})
				}
			})

		})
		// 好评
		axios.get('/BtCApi/Item/GetComment?proid=1&pageindex=1&pagesize=20&score=0').then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist:res.data.data
			})
		})
		// 中评
		axios.get('/BtCApi/Item/GetComment?proid=1&pageindex=1&pagesize=20&score=2').then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist2:res.data.data
			})
		})
		// 差评
		axios.get('/BtCApi/Item/GetComment?proid=1&pageindex=1&pagesize=20&score=3').then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist3:res.data.data
			})
		})
		// 晒图
		axios.get('/BtCApi/Item/GetCommentImg?proid=1&pageindex=1&pagesize=20').then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist4:res.data.data
			})
		})
	}

	render(){
		const tabs = [
		  { title: <Badge text={this.state.haoping}>好评</Badge> },
		  { title: <Badge text={this.state.zhongping}>中评</Badge> },
		  { title: <Badge text={this.state.chaping}>差评</Badge> },
		  { title: <Badge text={this.state.shaitu}>晒图</Badge> },
		];
		return <div id="evaluation">
            <WhiteSpace />
	            <Tabs tabs={tabs} tabBarUnderlineStyle={{backgroundColor:'#fff',height:1}} initialPage={0} 
	            animated={false} useOnPan={false} tabBarPosition={'top'}
	            tabBarActiveTextColor={'#f44'} tabBarUnderlineStyle={{borderBottom:'none'}}>
	              	<div className="taball" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
	               		<PullToRefresh
	               			damping={60}
	               			ref={el => this.ptr = el}
	               			style={{
	               			    height: this.state.height,
	               			    overflow: 'auto',
	               			}}
	               			indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
	               			direction={'up'}
	               			refreshing={this.state.refreshing}
	               			onRefresh={() => {
	               			    this.setState({
	               			    	refreshing: true,
	               			    	pageIndex:Math.floor(this.state.datalist.length/20)+1
	               			    });
	               			    axios.get('/BtCApi/Item/GetComment?proid=1&pageindex='+ this.state.pageIndex +'&pagesize=20&score=0').then(res=>{
	               			          this.setState({ 
	               			              refreshing: false,
	               			              datalist:[...this.state.datalist,...res.data.data]
	               			           });
	               			    })

	               			  }}
	               			>
		               		<ul className="tab1" key="ID">
			               		{
									this.state.datalist.map(item=><li key={item.ID}>
			               				<div className="touxiang">
			               					<img src="/avtar_com.png" alt=""/>
			               				</div>
			               				<div className="right">
											<p>{item.Usr_NiceName}<span>{item.Usr_LeveName}</span></p>
											<p key={item.ID}>
												{getStar(item.DescriptionScore)}
												<span>{item.CreateTime}</span>
											</p>
											<p>{item.Content}</p>
			               				</div>
			               			</li>)
			               		}
		               		</ul>
		               	</PullToRefresh>
	              	</div>
	              	<div className="taball" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
	               		<ul className="tab1">
		               		{
								this.state.datalist2.map(item=><li key={item.ID}>
		               				<div className="touxiang">
		               					<img src="/avtar_com.png" alt=""/>
		               				</div>
		               				<div className="right">
										<p>{item.Usr_NiceName}<span>{item.Usr_LeveName}</span></p>
										<p>
											{getStar(item.DescriptionScore)}
											<span key={item.ID}>{item.CreateTime}</span>
										</p>
										<p>{item.Content}</p>
		               				</div>
		               			</li>)
		               		}
	               		</ul>
	              	</div>
	              	<div className="taball" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
	               		<ul className="tab1">
		               		{
								this.state.datalist3.map(item=><li key={item.ID}>
		               				<div className="touxiang">
		               					<img src="/avtar_com.png" alt=""/>
		               				</div>
		               				<div className="right">
										<p>{item.Usr_NiceName}<span>{item.Usr_LeveName}</span></p>
										<p>
											{getStar(item.DescriptionScore)}
											<span>{item.CreateTime}</span>
										</p>
										<p>{item.Content}</p>
		               				</div>
		               			</li>)
		               		}
	               		</ul>
	              	</div>
	              	<div className="taball" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
	                	<ul className="tab1">
		               		{
								this.state.datalist4.map(item=><li key={item.ID}>
		               				<div className="touxiang">
		               					<img src="/avtar_com.png" alt=""/>
		               				</div>
		               				<div className="right">
										<p>{item.Usr_NiceName}<span>{item.Usr_LeveName}</span></p>
										<p>
											{getStar(item.DescriptionScore)}
											<span>{item.CreateTime}</span>
										</p>
										<p>{item.Content}</p>
		               				</div>
		               			</li>)
		               		}
	               		</ul>
	              	</div>
	            </Tabs>
            <WhiteSpace />
			
		</div>
	}
}
export default Evaluation;