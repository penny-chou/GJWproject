import React,{Component} from 'react';
import './index.scss';
import ReactDom from 'react-dom';
import Appdownload from './Appdownload/index.js';
import Swipe from './Swipe/index.js';
import Container from './Container/index.js';


class Home extends Component{
	render(){
		return <div id="home">
			<Appdownload/>
			<Swipe/>
			<Container/>
			{/*==========自己的组件，自己创建在home文件夹中，再引入这里=================*/}
		</div>
	}
}
export default Home;



