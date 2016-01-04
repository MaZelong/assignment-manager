import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import {RaisedButton} from 'material-ui';
require('./main.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
    //mock user for now
    window.localStorage._amtoken =  'secrettoken';

    //on success
    if (window.localStorage._amtoken) {
     // reroute immediately and dont' save
      window.location.href = window.location.origin + '/users';
    }

  }
  render() {
    return (
      <div>
       <h1>app</h1>
        {this.props.children}
      </div>
    );
  }
}



