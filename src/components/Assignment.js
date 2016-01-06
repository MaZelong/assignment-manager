import React from 'react';
import {List, ListItem} from 'material-ui';
import moment from 'moment';
import FileCloudUpload from 'react-material-icons/icons/file/cloud-upload';

export const Assignment = (props) => {
  return (
      <ListItem
        primaryText={props.class.toUpperCase() + " : " + props.assignmentName}
        secondaryText={"Due: " + moment(props.dueDate).calendar()}
        rightIcon={<FileCloudUpload />}
      />
  )
};

Assignment.propTypes = {
  assignmentName: React.PropTypes.string.isRequired,
  dueDate: React.PropTypes.string.isRequired
};

