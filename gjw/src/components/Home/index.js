import React,{Component} from 'react';
import './index.scss';
import Middle from './middle.js';
import Appdownload from './Appdownload';
import Swipe from './Swipe';
import Container from './Container';
import Footer from '../footer.js';
import PicBar from './PicBar';
class Home extends Component{
	render(){
		return <div id="home">
				<Appdownload/>
				<Swipe/>
				<Container/>
				<PicBar/>
				<Middle/>
				<Footer/>
		</div>
	}
}
export default Home;

