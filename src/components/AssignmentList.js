import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Card, List} from 'material-ui';
import {Assignment} from './Assignment';
import fakeUser from '../fixtures/userData';

export default class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let assignmentData = _.reduce(fakeUser, (data, value, i) => {
      value.assignments = _.map(value.assignments, (a) => {
        a.class = i;
        return a;
      });
      return data.concat(_.flatten(value.assignments));
    } ,[]);

    let assignments = _.map(assignmentData, (a, i) => {
      return <Assignment name={a.name} key={i} />
    })
    return (
      <Card style={{
        flexGrow: 3,
        minWidth: '10vw',
        overflowY: 'auto'
      }} >
        <List>
          <div style={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
           }}>
            Assignment List
          </div>
          Assignments...
          {assignments}
        </List>
      </Card>
    );
  }
}



