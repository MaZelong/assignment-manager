import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
export const Course = (props) =>
 (
   <Card initiallyExpanded={false}>
     <CardHeader
       title={props.data.name}
       subtitle={"instructor: " + props.data.instructor}
       actAsExpander={true}
       showExpandableButton={true} />
     <CardText expandable={true}>
       Due on
     </CardText>
     <CardActions expandable={true}>
       <FlatButton label="Submit Assignment"/>
       <FlatButton label="Download Assignment Materials"/>
     </CardActions>
   </Card>
  )
