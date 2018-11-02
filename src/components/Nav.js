import React, { Component } from 'react';
// import {database} from '../firebase';
// import _ from 'lodash';

import ReactDOM from 'react-dom';
import { NavLink} from 'react-router-dom';

class Nav extends React.Component {

  
  render() {
    return (
      <div className="container">
        <ul className="nav text-center">
          <li>
              <NavLink exact  to="/">
                  <i className="fa fa-home fa-3x"></i>
              </NavLink>
          </li>
  
          <li>
              <NavLink  to="/new">
                  <i className="fa fa-plus-circle fa-3x"></i>
              </NavLink>
          </li>
       
        </ul>
      </div>
    );
  }
}


export default Nav;