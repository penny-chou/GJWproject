import {createStore,combineReducers} from 'redux';
import titleReducer from './reducers/titleReducer.js';

var reducer = combineReducers({
	wineTitle:'titleReducer',
})

const store = createStore(reducer);

export default store;