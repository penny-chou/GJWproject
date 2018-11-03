import {createStore,combineReducers} from 'redux';
import pullReducer from './reducers/pullReducer.js';
import picReducer from './reducers/picReducer.js';

import {applyMiddleware,compose } from "redux";

// import reduxchunk from "redux-thunk";//npm install --save redux-thunk
import reduxpromise from "redux-promise";//npm install --save redux-promise

var reducer = combineReducers({
	pullList:pullReducer,
	picList:picReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(reduxpromise)
  ));
// const store = createStore(reducer,applyMiddleware(reduxpromise));

export default store;