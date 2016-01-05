import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List} from 'material-ui';
import _ from 'lodash';
import {Course} from './Class';
export default class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   let classes = _.map(this.props.classes, (c, i) => (
     <Course data={{name: c, instructor: (i ? "Joga" : "vijay")}} key={i} />
     ))
    return (
      <Card style={{
        flexGrow: 1,
        minWidth: '10vw',
        overflowY: 'auto',
        marginLeft: '10px'
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



