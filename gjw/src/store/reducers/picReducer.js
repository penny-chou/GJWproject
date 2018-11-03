var picReducer = (prevState=[],action={})=>{
	
	var type = action.type;
	switch(type){
		case "picloop":
			return action.payload
		default :
			return prevState
	}
	return prevState;
}
export default picReducer;