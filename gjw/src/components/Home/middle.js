import React,{Component} from 'react';
import './index.scss';

class Middle extends Component{
	render(){
		return <div id="middle">
			<ul className="ul_wuxu">
				<li>
					<a href="#">
						<img src="/戊戌狗年.jpg" alt=""/>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/戊戌.jpg" alt=""/>
					</a>
				</li>
			</ul>
			<dl className="w">
				<dt>
					<a href="#">
						<img src="/茅台飞天.jpg" alt=""/>
					</a>
				</dt>
				<dd>
					<a href="#">
						<img src="/拉菲.jpg" alt=""/>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="/黄尾袋鼠.jpg" alt=""/>
					</a>
				</dd>
			</dl>
			<ul className="ul_text">
				<li>正品保证</li>
				<li>开箱验货</li>
				<li>赔付保障</li>
			</ul>
			<img src="/手工班.jpg" alt=""/>
			<img src="/买一赠一.jpg" alt=""/>
		</div>
	}
}
export default Middle;