import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AssignmentList from './AssignmentList';
import ClassList from './ClassList';
import {browserHistory} from "react-router";
import fakeUser from '../fixtures/userData';
import qs from 'qs';
import xhr from 'xhr';
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
    this._getUserData('fakeUser');
  }

  filterClass(data) {
    this.setState({currentClass: data})
  }

  selectAssignment(data) {
    browserHistory.push('/submit?' + qs.stringify({class: data.class, assignment: data.assignmentName}));
  }

  _getUserData(userid) {
    xhr({
      url: 'http://localhost:8080/api/assignments',
      json: true
    }, (err, req, body) => {
      this._parseUserData(body)
    });
  }

  _parseUserData(data) {
    let classes = [];
    let assignmentData = _.reduce(data, (dat, value, i) => {
      classes.push({className: i, instructor: value.instructor}); // get the key to pass to classlist
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

  render() {
    let ca = this.state.currentClass;
    let assignmentList = ca ?
      _.filter(this.state.assignments, (a) => a.class === ca ) : this.state.assignments;
    let wh = window.innerHeight - 100;
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row no-wrap',
        width: '98%',
        margin: '10px auto',
        maxHeight: wh
      }}>
        <AssignmentList
          data={assignmentList}
          selectAssignment={this.selectAssignment.bind(this)}
        />

        <ClassList
          classes={this.state.classes}
          filter={this.filterClass.bind(this)}
        />
      </div>
    );
  }
}



