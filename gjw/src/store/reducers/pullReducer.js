var pullReducer = (prevState=[],action={})=>{
	
	var type = action.type;
	switch(type){
		case "pullrefresh":
			return action.payload
		default :
			return prevState
	}
	return prevState;
}
export default pullReducer;