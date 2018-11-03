import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';
import '../../static/iconfont2/iconfont.css';

class List extends Component{

	render(){
		return <div id="list">
			<header>
				<ul className="top">
					<li><NavLink to="/home"><i className="iconfont icon-back"></i></NavLink></li>
					<li>
						<i className="iconfont icon-search"></i>
						<input type="text" placeholder="请输入商品名称"/>
					</li>
					<li>搜索</li>
				</ul>
			</header>
			<nav>
				<ul className="tab">
					<li>
						<NavLink to="/list/comprehensive" activeClassName="activetab">综合</NavLink>
					</li>
					<li>
						<NavLink to="/list/sales" activeClassName="activetab">销量</NavLink>
					</li>
					<li>
						<NavLink to="/list/prices" activeClassName="activetab">价格</NavLink>
					</li>
				</ul>
			</nav>
			{this.props.children}
		</div>
	}
	
}
export default List;