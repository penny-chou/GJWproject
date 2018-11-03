import React,{Component} from 'react';
import './footer.css';
import '../static/iconfont/iconfont.css'
import {NavLink} from 'react-router-dom';

class Footer extends Component{
	render(){
		return <div id="footer">
			<ul>
				<li><NavLink to="/home" activeClassName="activepage">
					<p><i className="iconfont icon-shouye2"></i></p>
					<span>首页</span>
				</NavLink></li>
				<li><NavLink to="/category" activeClassName="activepage">
					<p><i className="iconfont icon-fenlei"></i></p>
					<span>分类</span>
				</NavLink></li>
				<li><NavLink to="/welfare" activeClassName="activepage">
					<img src="/bag.png" alt=""/>
					<span>专享福利</span>
				</NavLink></li>
				<li><NavLink to="/cart" activeClassName="activepage">
					<p><i className="iconfont icon-buoumaotubiao40"></i></p>
					<span>购物车</span>
				</NavLink></li>
				<li><NavLink to="/user" activeClassName="activepage">
					<p><i className="iconfont icon-wode"></i></p>
					<span>我的</span>
				</NavLink></li>
			</ul>
		</div>
	}
}
export default Footer;