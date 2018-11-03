import React,{Component} from 'react';
import './index.scss';
import axios from "axios";
import 'antd-mobile/dist/antd-mobile.css';

import { Tabs } from 'antd-mobile';

class Detail extends Component{
	
	constructor(props){
		super(props)

		this.state = {
			looplist:[],
			datalist:[],
			url:'http://img0.gjw.com/product/'
		}
	}

	componentDidMount(){

		axios.post('/BtCApi/Item/GetProduct','Id=7456&UserID=null&Signid=null&DeviceId=89f4f64c-1b94-46a4-b5e4-f7152db0f2de&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0&ProvinceId=9').then(res=>{
			console.log(res.data);

			this.setState({
				looplist:res.data.data.listpic,
				datalist:res.data.data.ListAttr
			})
		})
	}

	render(){
	const tabs = [
	  { title: '商品介绍' },
	  { title: '规格参数' },
	  { title: '包装售后' },
	];
	return <div id="detail">
	    	<Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarActiveTextColor="#f44" tabBarUnderlineStyle={{backgroundColor:'#FF0000'}} tabBarTextStyle={{fontSize: 14}}>
		      	<div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
		       	 	{
		       	 		this.state.looplist.map(item=>(
							<img src={this.state.url+item.Pic} alt="" key=""/>
		       	 		))
		       	 	}
		      	</div>
		      	<div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
		        		<table border="0" cellSpacing="0" cellPadding="0" className="attr">
							<tbody>
							{
								this.state.datalist.map(item=>(
									<tr>
										<td>{item.AttrTitle}</td>
										<td>{item.AttrVal}</td>
									</tr>
								))
							}
							</tbody>
		        		</table>
		      	</div>
		      	<div style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
		       		<div>包装由购酒网专箱及胶带封箱</div>
		      	</div>
    		</Tabs>
		</div>
	}
}

export default Detail;