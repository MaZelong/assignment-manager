import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import {RaisedButton} from 'material-ui';
require('./main.scss');
export default class App extends React.Component {
  render() {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: 'flex',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin: "auto"
        }}
      >
        <RaisedButton
          label="Login with Google"
          onClick={this.onSubmit}
          style={{
            width: "30%"
          }}
          secondary="true"
        />
      </div>
    );
  }
}



