import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AssignmentList from './AssignmentList';
import ClassList from './ClassList';

import fakeUser from '../fixtures/userData';

export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      assignments: [],
      currentClass: null,
      currentAssignment: null
    }
  }

  componentWillMount() {
    if (!window.localStorage._amtoken) {
      window.location.href = window.location.origin;
    }
  }

  _parseUserData(data) {
    let classes = [];
    let assignmentData = _.reduce(data, (dat, value, i) => {
      classes.push(i); // get the key to pass to classlist
      let assignments = [];
      _.forEach(value.assignments, (a) => {
        a.class = i;
        assignments.push(a);
      });
      return dat.concat(assignments);
    } ,[]);

    this.setState({
      classes: classes,
      assignments: assignmentData
    });
  }

  componentWillMount() {
    this._parseUserData(fakeUser)
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row no-wrap',
        width: '100%',
        margin: '10px auto'
      }}>
        <AssignmentList data={this.state.assignments} />
        <ClassList classes={this.state.classes} />
      </div>
    );
  }
}



