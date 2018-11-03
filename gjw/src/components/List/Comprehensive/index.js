import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';
import { PullToRefresh, Button,ActivityIndicator, WingBlank, WhiteSpace, } from 'antd-mobile';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css'; 



class Comprehensive extends Component{
	constructor(props){
		super(props);
		this.state = {
			refreshing: false,
			datalist:[],
			down: true,
			height: document.documentElement.clientHeight,
			url:'http://img0.gjw.com/product/',
			pageIndex:1,
			animating: false,
		}
	}
	componentWillUnmount() {
	  clearTimeout(this.closeTimer);
	}
	
	componentDidMount(){
		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
		axios.get('/BtCApi/List/GetProListWhere?ParentID=1&brand=0&strWhere=0,0,0,0,0&sort=1&PageIndex=1&PageSize=20&userID=0').then(res=>{
			this.setState({
				datalist:res.data.data.Prolist,
				height: hei,
			})
		})
	}
	render(){
		return <div id="sales">
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
				    	pageIndex:this.state.datalist.length/20+1,
				    	animating:true,
				    });
				   
				    axios.get('/BtCApi/List/GetProListWhere?ParentID=1&brand=0&strWhere=0,0,0,0,0&sort=1&PageIndex='+ this.state.pageIndex +'&PageSize=20&userID=0').then(res=>{
			          	this.setState({ 
			              refreshing: false,
			              datalist:[...this.state.datalist,...res.data.data.Prolist],
			              animating:false,
			            });
				    })

				  }}
				>
				
				<ul>
					{
						this.state.datalist.map(item=><li key={item.ID}>
							<img src={this.state.url+item.Pic} alt=""/>
							<div className="over" style={{'WebkitBoxOrient':'vertical'}}>{item.ProductName}</div>
							{
								(item.ActivityName.length==0)?<div className="tagfalse"></div>:<div className="tag">{item.ActivityName.map(i=>
									<span key="">{i.Ativityname}</span>
								)}</div>
							}
							<div className="price">￥{item.APPPrice}</div>
							<div className="tip">
								<span className="l">{item.GoodCommment}好评</span>
								<span className="r">{Math.floor(item.GoodCommment/item.SumComment*100)}%好评</span>
							</div>
						</li>)
					}
				</ul>
			</PullToRefresh>
			<WingBlank>
			      <div className="toast-container">
			        <WhiteSpace size="xl" />
			        <div className="toast-example">
			          <ActivityIndicator
			            toast
			            text="Loading..."
			            animating={this.state.animating}
			          />
			        </div>
			      </div>
			</WingBlank>
		</div>
	}
}
export default Comprehensive;
