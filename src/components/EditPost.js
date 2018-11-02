import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';

import ReactDOM from 'react-dom';


// import $ from 'jquery'; 



class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
     title: '',
      body: '',
      post:{}
  
    };
    // this.onTitleChange = this.onTitleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
}

  
  componentDidMount(){
  database.ref(`posts/${this.props.match.params.postId}`) 
    .on('value', snap =>  this.setState({
       title: snap.val().title, 
       body: snap.val().body 
    }));
    this.postId= this.props.match.params.postId;
    
}

   handleChange(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }
    handleUpdate(e) {
    e.preventDefault();
    console.log(this.state.title, this.state.body);
    database.ref('posts').child(`${this.postId}`).update({ title: this.state.title, body: this.state.body });
    this.setState({
      title: "",
      body: ""
    });
  }
// handleUpdate(e){
//     console.log(this.postId);
//     e.preventDefault();

//     database.ref('posts').child(`${this.postId}`).update(this.state); 
    
    
  
//   }

  render() {
    return (
 
        <div className="container">
          <form onSubmit={this.handleUpdate}>
            <div className="form-group">
              <input className="form-control"
          type="text"
          value={this.state.title}
          onChange={e => this.handleChange(e, "title")}
        />
            </div>
              <br/>
            <div className="form-group"> 
            <input className="form-control"
                type="text"
  value={this.state.body}
  onChange={e => this.handleChange(e, "body")}
/>
              <br/>
            </div>
            <button  className="btn btn-success">Submit</button>
          </form>
        </div>
      
    );
  }
    
    
    
}


export default Edit;