import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List} from 'material-ui';
import _ from 'lodash';
export default class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   let classes = _.map(this.props.classes, (c, i) => (
     <div key={i}>{c}</div>
   ))
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
            Class List
          </div>
          {classes}
        </List>
      </Card>
    );
  }
}



