import React,{Component} from 'react';
import './index.scss';
import axios from "axios";
import 'antd-mobile/dist/antd-mobile.css';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

class Appdownload extends Component{

	render(){
		return (
			<div id="Appdownload">
				<NoticeBar mode="closable" icon={null}><a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.shichuang.goujiuwang"><img src="./images/appdown0105.jpg" alt=""/></a></NoticeBar>	
			</div>
		)
	}
}


export default Appdownload;