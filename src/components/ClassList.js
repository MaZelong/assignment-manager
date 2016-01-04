import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List} from 'material-ui';

export default class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{
        flexGrow: 2,
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
          Classes...
        </List>
      </Card>
    );
  }
}



