import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List} from 'material-ui';

const Assignment = (props) => (
  <div>
    testing {props.user}
  </div>
)


export default class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{
        flexGrow: 1,
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
          <Assignment user="test" />
        </List>
      </Card>
    );
  }
}



