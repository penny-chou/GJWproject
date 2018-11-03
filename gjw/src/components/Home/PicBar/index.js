import React,{Component} from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
class PicBar extends Component{
	render(){
		return <div id="PicBar">
			<ul>
				<li><NavLink to="/list"><img src="/indexpic/img(1).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(2).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(3).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(4).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(5).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(6).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(7).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(8).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(9).jpg" alt=""/></NavLink></li>
				<li><NavLink to="/list"><img src="/indexpic/img(10).jpg" alt=""/></NavLink></li>
			</ul>
		</div>
	}
}
export default PicBar;