import React,{Component} from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import '../../static/iconfont2/iconfont.css';
import Goods from './Goods';
import Detail from './Detail';
import Evaluation from './Evaluation';
import axios from 'axios';
import { Tabs, WhiteSpace,Badge } from 'antd-mobile';

const tabs = [
  { title: <a href="#goods">商品</a> },
  { title: <a href="#detail">详情</a> },
  { title: <a href="#evaluation">评价</a> },
];
class Product extends Component{
	constructor(props){
		super(props);
		this.state = {
			winename:null,
			needFixed:false,
			cartNum:0,
		}
	}
	componentWillMount(){
		axios.post('/BtCApi/Item/GetProduct','Id=1&UserID=null&Signid=null&DeviceId=89f4f64c-1b94-46a4-b5e4-f7152db0f2de&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0&ProvinceId=9').then(res=>{
			this.setState({
				winename:res.data.data.ProductName
			})
		})
		axios.post('/BtCApi/ShopCar/CartCount','UserID=null&Signid=null&DeviceId=55e7209b-c318-4256-9df1-864b325fb47c&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0').then(res=>{
			this.setState({
				cartNum:res.data.data
			})
		})
	}
	componentDidMount(){
		// 监听页面滚动事件，handleScroll检测页面相距顶端的距离
    	window.addEventListener('scroll', this.handleScroll);
    	//这里页面只执行一次 
    	// console.log(window.scrollY);
  	}
  	handleScroll(){
  		// console.log('yyy:',window.scrollY); 
  	
  	}
	render(){
		return <div id="product">
			{
				this.state.needFixed?<header id="head">
					<i className="iconfont icon-back"></i>
					<div className="wineName">{this.state.winename}</div>
				</header>:null
			}
			<nav id="nav" className={'needFix'}>
<<<<<<< HEAD
			  	<div className="navbar">
=======
			  	<div>
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
				    {/*<WhiteSpace />*/}
				    <Tabs tabs={tabs} initialPage={0} animated={false}
				     useOnPan={false} tabBarActiveTextColor={'#f44'}>
				    </Tabs>
				    <WhiteSpace />
			  	</div>
			</nav>	
			<Goods/>
			<Detail/>
			<Evaluation/>
			<footer>
			  	<ul>
			  		<li><NavLink to="/home"><i className="iconfont icon-shouye1"></i><p>首页</p></NavLink></li>
			  		<li><NavLink to="/"><Badge text={this.state.cartNum} ><i className="iconfont icon-buoumaotubiao40"></i></Badge>购物车</NavLink></li>
			  		<li><NavLink to="/">加入购物车</NavLink></li>
			  		<li><NavLink to="/">立即购买</NavLink></li>
			  	</ul>
			</footer>
		</div>
	}

}
export default Product;