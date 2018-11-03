import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import { Carousel } from 'antd-mobile';

class Container extends Component{
	render(){
		return <div id="Container">
			<div className="notice">
				<div className="ico">
					<img src="./images/hot.png" alt=""/>
				</div>
				<div className="notice-con">
					<Carousel className="my-carousel"
					    vertical
					    dots={false}
					    dragging={false}
					    swiping={false}
					    autoplay
					    infinite
					>
					    <div className="v-item">洋河美人泉清仓仅需59元</div>
					    <div className="v-item">洋河美人泉清仓仅需59元</div>
					</Carousel>
				</div>
			</div>
		</div>
	}
}

export default Container;