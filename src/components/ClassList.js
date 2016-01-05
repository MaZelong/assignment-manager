import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List, ListItem} from 'material-ui';
import _ from 'lodash';

export default class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   let classes = _.map(this.props.classes, (c, i) => (
     <ListItem
       primaryText={c}
       secondaryText={i ? "instructor: Joga":"instuctor: Vijay"}
       key={i}
     />
     ));

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



