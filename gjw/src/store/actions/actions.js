import axios from 'axios';
const action = {
	pullToRefresh(pageIndex,datalist){
		return axios.get('/BtCApi/List/GetProListWhere?ParentID=1&brand=11&strWhere=0,0,0,0,0&sort=0&PageIndex='+ pageIndex +'&PageSize=20&userID=0').then(res=>{
		    console.log(pageIndex+','+ datalist);
		    return {
		    	type:"pullrefresh",
		    	payload:[...datalist,...res.data.data.Prolist]
		    }
		})
	},
	picToLoop(){
		return axios.post('/BtCApi/Item/GetProduct','Id=1&UserID=null&Signid=null&DeviceId=55e7209b-c318-4256-9df1-864b325fb47c&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0&ProvinceId=9').then(res=>{
			console.log(res.data);
			return {
				type:"picloop",
				payload:res.data.data.listpic
			}
		})
	},
}
export default action;
