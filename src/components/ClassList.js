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
     <div
       onClick={this.props.filter.bind(null, c.className)}
       key={i}
     >
       <ListItem
         primaryText={c.className}
         secondaryText={"Instructor: " + c.instructor}
       />
     </div>
     ));

    return (
      <Card style={{
        flexGrow: 1,
        minWidth: '10vw',
        overflowY: 'auto',
        marginLeft: '1vw',
        marginRight: '1vw'
      }} >
        <List>
          <div style={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
           }}>
          <div onClick={this.props.filter.bind(null, null)}>Class List</div>
          </div>
          {classes}
        </List>
      </Card>
    );
  }
}



