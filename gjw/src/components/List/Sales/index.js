import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';
import { PullToRefresh, Button,ActivityIndicator, WingBlank, WhiteSpace, } from 'antd-mobile';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css'; 
<<<<<<< HEAD
import {NavLink} from 'react-router-dom';
=======
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
// import action from "../../../store/actions/actions.js";
// import {connect} from "react-redux";


class Sales extends Component{
	constructor(props){
		super(props);
		this.state = {
			refreshing: false,
			datalist:[],
			down: true,
			height: document.documentElement.clientHeight,
			url:'http://img0.gjw.com/product/',
			pageIndex:1,
<<<<<<< HEAD
			animating: true,
=======
			animating: false,
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
		}
	}
	componentWillUnmount() {
	  clearTimeout(this.closeTimer);
	}
	
	componentDidMount(){
		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
		axios.get('/BtCApi/List/GetProListWhere?ParentID=1&brand=0&strWhere=0,0,0,0,0&sort=0&PageIndex=1&PageSize=20&userID=0').then(res=>{
			this.setState({
				datalist:res.data.data.Prolist,
				height: hei,
<<<<<<< HEAD
				animating:false
=======
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
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
				   
				    axios.get('/BtCApi/List/GetProListWhere?ParentID=1&brand=11&strWhere=0,0,0,0,0&sort=0&PageIndex='+ this.state.pageIndex +'&PageSize=20&userID=0').then(res=>{
			          	this.setState({ 
			              refreshing: false,
			              datalist:[...this.state.datalist,...res.data.data.Prolist],
			              animating:false,
			            });
				    })
<<<<<<< HEAD
					setTimeout(()=>{
						this.setState({
			  			animating:false,
			  			})
					},3000)
=======

>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
				  }}
				>
				
				<ul>
					{
						this.state.datalist.map(item=><li key={item.ID}>
<<<<<<< HEAD
							<NavLink to="/product">
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
							</NavLink>
=======
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
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
						</li>)
					}
				</ul>
			</PullToRefresh>
<<<<<<< HEAD
			<ActivityIndicator
                toast
                size="large"
                text="Waiting~~~"
                animating={this.state.animating}
            />
=======
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
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
		</div>
	}
}
export default Sales;
// export default connect(
// 	(state)=>{
// 		return{
// 			list:state.pullList
// 		}
// 	},action)(Sales);