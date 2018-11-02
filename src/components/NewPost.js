import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';

class NewPost extends React.Component {
constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      posts:{}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  
  onInputChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  onHandleSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.ref('/posts').push(post);
    this.setState({
      title: '',
      body: ''    
    });
  }
  componentDidMount(){
    database.ref('/posts').on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      });
      
    });
  }

  
  render() {
    return (
 
        <div className="container">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <input value={this.state.title} className="form-control" type="text" name="title" ref="title" placeholder="Title" onChange={this.onInputChange}/>
            </div>
              <br/>
            <div className="form-group">  
              <input  value={this.state.body} className="form-control" type="text" name="body" ref="body" placeholder="Body" onChange={this.onInputChange}/>
              <br/>
            </div>
            <button  className="btn btn-primary">Post</button>
          </form>
        </div>
      
      
    );
  }
}


export default NewPost;