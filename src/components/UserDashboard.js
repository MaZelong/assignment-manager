import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AssignmentList from './AssignmentList';
import ClassList from './ClassList';

import fakeUser from '../fixtures/userData';

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
    let assignmentData = _.reduce(fakeUser, (data, value, i) => {
       let assignments = [];
       _.forEach(value.assignments, (a) => {
         a.class = i;
         assignments.push(a);
      });
      return data.concat(assignments);
    } ,[]);
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row no-wrap',
        maxWidth: 1200,
        maxHeight: '700',
        width: '100%',
        margin: '30px auto 30px'
      }}>
        <ClassList />
        <AssignmentList data={assignmentData} />
      </div>
    );
  }
}



