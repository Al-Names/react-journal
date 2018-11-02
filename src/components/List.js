import React, { Component } from 'react';
import {database} from '../firebase';
// import _ from 'lodash';

import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


class List extends React.Component {
  
  
constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      posts:{}
    };
    
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  

  
  componentDidMount(){
    database.ref('/posts').on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }
  

  renderPosts(){
    return Object.keys(this.state.posts).map((post, index)=>(
        <div key={index} className="thumbnail postBox">
        <h2 className="index">
          <span>
            <i className="fa fa-spinner fa-pulse"></i>
          </span>
          <Link to={`/view/posts/${post}`} className="link">
            {this.state.posts[post].title}
          </Link>
          <span>
            =>
          </span>          
        </h2>
        
        </div>
      )
    );
}
  
  render() {
    return (
    
      <div >
 
        <div>
          {this.renderPosts()}
          
        </div>
         
      </div>
      
    );
  }
}


export default List;