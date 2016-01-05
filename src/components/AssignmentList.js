import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Card, List, ListItem} from 'material-ui';
import {Assignment} from './Assignment';

export default class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let assignments = _.map(this.props.data, (a, i) => (
      <div
        onClick={this.props.selectAssignment.bind(null, a)}
        key={i}
      >
        <Assignment
          {...a}
        />
      </div>
      )
    );

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
          {assignments}
        </List>
      </Card>
    );
  }
}

AssignmentList.propTypes = {
  data: React.PropTypes.array
};
