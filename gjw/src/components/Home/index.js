import React,{Component} from 'react';
import './index.scss';
import Middle from './middle.js';
import Footer from '../footer.js';
class Home extends Component{
	render(){
		return <div id="home">
				<Middle/>
				<Footer/>
		</div>
	}
}
export default Home;

