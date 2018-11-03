import React,{Component} from 'react';
import './index.scss';
import axios from "axios";
import 'antd-mobile/dist/antd-mobile.css';
import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom';
import { PullToRefresh, Button, ActivityIndicator } from 'antd-mobile';

function genData() {
  	const dataArr = [];
  	for (let i = 0; i < 20; i++) {
    	dataArr.push(i);
  	}
  	return dataArr;
}

class Prices extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		refreshing: false,
      		down: true,
      		height: document.documentElement.clientHeight,
      		looplist: [],
      		url:"http://img0.gjw.com/product/",
      		pageIndex:1,
      		animating:true,
    	};
  	}

  	componentDidMount() {
    	const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    	setTimeout(() => this.setState({
      		height: hei,
    	}), 0);
    	axios.get("/BtCApi/List/GetProListWhere?ParentID=1&brand=11&strWhere=0,0,0,0,0&sort=5&PageIndex=1&PageSize=20&userID=0").then(res=>{
    				console.log(res.data);

    				this.setState({
    					looplist:res.data.data.Prolist,
    					animating:false,
    				})

    			})
  	}

  	render() {
    	return (<div>
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
	          			pageIndex:this.state.looplist.length/20+1,
	          			animating:true,
	          		});
	          		setTimeout(() => {
	            		axios.get("/BtCApi/List/GetProListWhere?ParentID=1&brand=11&strWhere=0,0,0,0,0&sort=5&PageIndex="+ this.state.pageIndex +"&PageSize=20&userID=0").then(res=>{
	            					console.log(res.data);

	            					this.setState({
	            						looplist:[...this.state.looplist,...res.data.data.Prolist],
					            		refreshing: false,
					            		animating:false,
	            					})

	            				})
	            		
	          		}, 200);

	          		setTimeout(()=>{
	          			this.setState({
	            			animating:false,
	            		})
	          		},3000)
	        	}}
	      	>
	        	<div id="prices">
	        				<div className="container">
	        					<div className="pro_list">
	        						<div className="row">
	        							{
	        								this.state.looplist.map(item=>
	        									<div className="col" key={item.ID}>
	        										<NavLink to="/product">
		        										<div className="pro_item">	
		        											<a href="#">
		        											<img src={this.state.url+item.Pic} alt="" className="pic"/>
		        											<p className="tit2" style={{"WebkitBoxOrient": "vertical"}}>{item.ProductName}</p>
		        											{
		        												(item.ActivityName.length===0)?<div className="tagfalse"></div>:<div className="tag">{item.ActivityName.map(i=>
		        													<span key="">{i.Ativityname}</span>
		        												)}</div>
		        											}
		        											<div className="price">￥{item.APPPrice}</div>
		        											<div className="tip">{item.GoodCommment}条好评	<span>{Math.floor(item.GoodCommment/item.SumComment*100)}%好评</span></div>
		        											</a>
		        										</div>
	        										</NavLink>
	        									</div>	
	        								)
	        							}	
	        						</div>
	        					</div>
	        				</div>
	        			</div>
	      	</PullToRefresh>
	      	<ActivityIndicator
                toast
                size="large"
                text="Waiting~~~"
                animating={this.state.animating}
            />
		</div>);
  	}
}

export default Prices;