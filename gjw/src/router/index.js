import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import React from 'react';
// import {Provider} from "react-redux";
// import store from '../store';

import App from '../App';
import Home from '../components/Home';
import List from '../components/List';
import Category from '../components/Category';
import Product from '../components/Product';

import Comprehensive from '../components/List/Comprehensive';
import Sales from '../components/List/Sales';
import Prices from '../components/List/Prices';

import Goods from '../components/Product/Goods';
import Detail from '../components/Product/Detail';
import Evaluation from '../components/Product/Evaluation';

const router = (
	
		<Router>
			<App>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/category" component={Category}/>
					<Route path="/list" render={()=>
						<List>
							<Switch>
								<Route path="/list/comprehensive" component={Comprehensive}/>
								<Route path="/list/sales" component={Sales}/>
								<Route path="/list/prices" component={Prices}/>
								<Redirect from="/list" to="/list/comprehensive"/>
							</Switch>
						</List>
					}/>
					<Route path="/product" render={()=>
						<Product>
							<Switch>
								<Route path="/product/goods" component={Goods}/>
								<Route path="/product/detail" component={Detail}/>
								<Route path="/product/evaluation" component={Evaluation}/>
								<Redirect from="/product" to="/product/goods"/>
							</Switch>
						</Product>
					}/>
					<Redirect from="*" to="/home"/>
				</Switch>
			</App>
		</Router>
	// </Provider>
);
export default router;
