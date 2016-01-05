import React from 'react';
import {List, ListItem} from 'material-ui';
import moment from 'moment';
import FileCloudUpload from 'react-material-icons/icons/file/cloud-upload';

export const Assignment = (props) => {
 return <ListItem
   primaryText={props.courseName}
   secondaryText={"Due: " + props.dueDate.calendar()}
   rightIcon={<FileCloudUpload />}
 />
}
