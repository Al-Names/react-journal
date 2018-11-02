import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';

import {Link} from 'react-router-dom';
// import $ from 'jquery'; 



class View extends React.Component {


constructor(props){
    super(props);
    this.state =  {
      title: '',
      body: '',
      post:{},
      
  };
}

componentDidMount(){
    database.ref(`posts/${this.props.match.params.postId}`) 
    .on('value', snapshot => {
          this.setState({post: snapshot.val()});
    });
    this.postId= this.props.match.params.postId;
}

handleDelete(e){ 
console.log('postId = ', this.postId); 
database.ref('posts').child(`${this.postId}`).remove(); 
alert("Post successfully deleted! Move Along!");
}
  render() {
     
   
    return (
      <div className="container">
        <div className=" view">
          <h2 className="text-center">
           
            {this.state.post && this.state.post.title}
          </h2>
          <hr/>
          <div className="viewedText">
            <p>
              {this.state.post && this.state.post.body}
            </p>
          </div>
        </div>
        <hr/> 
        <div className="button-bag">
          <div className="button-case">
            <button className="btn btn-danger delete" onClick= {this.handleDelete.bind(this)}>Delete</button>
            <button className="btn btn-primary edit">
             <Link to={'/edit/posts/'+ this.postId} className="link">
                Edit
             </Link>
             </button>
          </div>
        </div>
        
      </div>
      );
    
  }
}


export default View;