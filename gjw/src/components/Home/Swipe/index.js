import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import axios from "axios";

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import {Carousel} from 'antd-mobile';
// import ReactSwipe from 'react-swipe';
var arr=[];
class Swipe extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			looplist:[]

		};
	}

	componentDidMount(){

		axios.get("/BtCApi/Home/GetHomePageImg").then(res=>{
			// console.log(res.data.data);
   			res.data.data.map(item=>{
   				if(item.adv_BlockID===1){
   					arr.push(item);
   				}
   			})
   		setTimeout(() => {
   			this.setState({
   					looplist:arr
   				})
		}, 5000);
			console.log(this.state.looplist);


		})
	}

	render(){
		return (<div id="Swipe">
	        <Carousel
	          	autoplayInterval={4000}
	          	infinite
	          	dotStyle={{width:'6px', height:'6px', bottom:'10px', marginBottom:'10px'}}
	          	dotActiveStyle={{background:'#f60', width:'6px', height:'6px', marginBottom:'10px'}}
				autoplay={true}
	        >
	        {this.state.looplist.map(item => (
	            <a
	              	key={item.ID}
	              	href="#"
	              	style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
	            >
	            <img
	              	src={item.Pic}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top'}}
	                onLoad={() => {
                      	// fire window resize event to change height
                     	// window.dispatchEvent(new Event('resize'));
                      	this.setState({ imgHeight: 'auto' });
                	}}
	            />
	            </a>
	          ))}
	        </Carousel>


			<div className="search_box">
				<i className="iconfont icon-sousuo">
				<span>请输入商品名称</span>
				</i>
			</div>
		</div>
		);
	}
}
export default Swipe;

