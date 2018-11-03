import React,{Component} from 'react';
import './index.scss';
class Product extends Component{
	render(){
		return <div>
			{
				this.props.children
			}
		</div>
	}
}
export default Product;