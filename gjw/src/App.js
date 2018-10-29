import React, { Component } from 'react';

import './App.css';
import 'amfe-flexible/index';
class App extends Component {
  render() {
    return <div id="App">
    	
    	{
    		this.props.children
    	}
      </div>
  }
}

export default App;
