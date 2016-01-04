import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

  componentWillMount() {
    if (!window.localStorage._amtoken) {
      window.location.href = window.location.origin;
    }
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row no-wrap',
        maxWidth: 1200,
        maxHeight: '500',
        width: '100%',
        margin: '30px auto 30px'
      }}>
        <div> Classes </div>
        <div> Upcoming Assignments </div>
      </div>
    );
  }
}



