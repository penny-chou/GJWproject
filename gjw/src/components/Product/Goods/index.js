import React,{Component} from 'react';
import './index.scss';
import axios from 'axios';

import { List, Stepper,Carousel, WingBlank } from 'antd-mobile';
import ReactSwipe from 'react-swipe';

var getStar = (num)=>{
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(<img src="/comment_good.png" key={i}/>)
	}
	return arr;
}

class Goods extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			datalist:[],
			looplist:[],
			productName:null,
			productPrice:0,
			BagExplain:null,
			MRemark:null,
			SumComment:0,
			evaList:[],
			val: 1,
			imgHeight: 176,
			url:'http://img0.gjw.com/product/',
			
			// data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],

		}

	}
	componentDidMount() {
	  // simulate img loading
	  setTimeout(() => {
	    this.setState({
	      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	    });
	  }, 100);
	}
	componentDidMount(){
		axios.post('/BtCApi/Item/GetProduct','Id=1&UserID=null&Signid=null&DeviceId=55e7209b-c318-4256-9df1-864b325fb47c&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0&ProvinceId=9').then(res=>{
			this.setState({
				looplist:res.data.data.listpic,
				productName:res.data.data.ProductName,
				productPrice:res.data.data.APPPrice,
				BagExplain:res.data.data.BagExplain,
				MRemark:res.data.data.MRemark,
				SumComment:res.data.data.SumComment
			})
			console.log(this.state.looplist)
		})

		axios.get('/BtCApi/Item/GetComment?proid=1&pageindex=1&pagesize=5&score=0').then(res=>{
			this.setState({
				evaList:res.data.data
			})
		})
	}
	onChange = (val) => {
	  this.setState({ val });
	}
	
	render(){
		return <div id="goods">
			<div className="swiper">
		     <ReactSwipe className="carousel" key={this.state.looplist.length} swipeOptions={{continuous: true,auto: 1000}}>
		         {this.state.looplist.map(val => (
 		            <img src={this.state.url+val.Pic} key={val.id}/>
 		         ))}
		     </ReactSwipe>
			</div>
			<ul>
				<li className="wineName">{this.state.productName}</li>
				<li className="price">￥{this.state.productPrice}<span>降低通知</span></li>
				<li className="proNum">
					<List>
					  <List.Item
					    wrap
					    extra={
					      <Stepper
					        style={{ width: '100%', minWidth: '50px' }}
					        showNumber
					        // max={10}
					        min={1}
					        value={this.state.val}
					        onChange={this.onChange}
					      />}
					  >
					  数量
					  </List.Item>
					</List>
				</li>
				<li className="info">有送至上海市<span>></span><p>有货</p></li>
				<li className="safeinfo">提示  {this.state.BagExplain}<p>{this.state.MRemark}</p></li>
				<li className="safe">
					<ul>
						<li><i className="iconfont icon-success"></i>购酒发货&售后</li>
						<li><i className="iconfont icon-success"></i>正品保障</li>
						<li><i className="iconfont icon-success"></i>满100包邮</li>
					</ul>
				</li>
				<li className="evaInfo">
					<span>评价({this.state.SumComment})</span>
					<span>好评度<span>97%<span>&nbsp;&nbsp;></span></span></span>
				</li>
				<li className="evaInfoList">
					<ul className="tab1" key="ID">
						{
							this.state.evaList.map(item=><li key={item.ID}>
	               				<div className="touxiang">
	               					<img src="/avtar_com.png" alt=""/>
	               				</div>
	               				<div className="right">
									<p>{item.Usr_NiceName}<span>{item.Usr_LeveName}</span></p>
									<p key={item.ID}>
										{getStar(item.DescriptionScore)}
										<span>{item.CreateTime}</span>
									</p>
									<p>{item.Content}</p>
	               				</div>
	               			</li>)
	               		}
					</ul>
				</li>
				<li className="lastli"><button>查看全部评论&nbsp;&nbsp;></button></li>
			</ul>
		</div>
	}
}
export default Goods;
