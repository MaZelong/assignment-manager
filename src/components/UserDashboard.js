import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AssignmentList from './AssignmentList';
import ClassList from './ClassList';
export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

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
        maxHeight: '700',
        width: '100%',
        margin: '30px auto 30px'
      }}>
        <AssignmentList />
        <ClassList />
      </div>
    );
  }
}



