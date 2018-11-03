import React,{Component} from 'react';
import './index.scss';
import Footer from '../footer.js';
import {NavLink} from 'react-router-dom';
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Cart extends Component{
	onChange = (val) => {
	    console.log(val);
	  }
	 constructor(props){
	 	super(props);
	 	this.state = {
	 		 total:0.00,
	 		 num:0
	 	}
	 }
	render(){
		return <div id="cart">
				<header>购物车<span>编辑</span></header>
				<main>
					<img src="/cart_empty.png" alt=""/>
					<p>您的购物车还没有商品</p>
					<p>快去逛逛~</p>
					<button><NavLink to="/home">去首页</NavLink></button>
					<img src="/cart-bg.png" alt=""/>
				</main>
				<div className="jiesuan">
					<Flex className="checkAll">
					  <Flex.Item>
					    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
					      全选
					    </AgreeItem>
					  </Flex.Item>
					</Flex>
					<div className="heji">
						<div>
							<span>合计：<span>￥{this.state.total}</span></span>
							<button>结算({this.state.num})</button>
						</div>
					</div>
				</div>
				<Footer/>
		</div>
	}
}
export default Cart;