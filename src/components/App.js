import React, { Component } from 'react';
// import {database} from '../firebase';
// import _ from 'lodash';

// import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import List from './List';
import NewPost from './NewPost';
import Nav from './Nav';
import View from './ViewPost';
import Edit from './EditPost';
import Footer from './Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App container container-fluid">
      <header className="App-header">
          <h1 className="App-title">
            It's gonna happen evetually...
            <br/>
            And when it does... 
            <br/>
            It's on me
          </h1>
        </header>
        
        <hr/>
        
       <BrowserRouter>
        <div>
          <div>
            <Nav/>
          </div>
          <Switch>
          
            <Route path='/' exact component={List}/>
            <Route path='/new' component={NewPost}/>
            <Route path='/view/posts/:postId' component={View}/>
            <Route path='/edit/posts/:postId' component={Edit}/>
            
            
          </Switch>
        </div>
      </BrowserRouter> 
      <hr/>
      <Footer/>
      </div>
      
    );
  }
}

export default App;
