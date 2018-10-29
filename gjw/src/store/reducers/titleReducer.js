var titleReducer = (prevState=[],action={})=>{
	var type = action.type;
	switch(type){
		case "changetitle":
			return action.payload
		default :
			return prevState
	}
	return prevState;
}
export default titleReducer;