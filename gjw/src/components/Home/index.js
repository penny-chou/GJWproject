import React,{Component} from 'react';
import './index.scss';
import Middle from './middle.js';
<<<<<<< HEAD
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
=======
import Footer from '../footer.js';
class Home extends Component{
	render(){
		return <div id="home">
>>>>>>> c469d2b144dcf6e981ec93cfcd239fb3479fc266
				<Middle/>
				<Footer/>
		</div>
	}
}
export default Home;

