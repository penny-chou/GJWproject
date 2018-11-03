import React,{Component} from 'react';
import './index.scss';
class List extends Component{
	render(){
		return <div>
			{this.props.children}
		</div>
	}
}
export default List;