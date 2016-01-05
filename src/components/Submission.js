import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AssignmentList from './AssignmentList';
import {browserHistory} from "react-router";
import fakeUser from '../fixtures/userData';
import qs from 'qs';
import {Card} from 'material-ui';
import DZ from './Dropzone';
export default class Submission extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!window.localStorage._amtoken) {
      window.location.href = window.location.origin;
    }
  }
  render() {

    let wh = window.innerHeight - 100;
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row no-wrap',
        width: '100%',
        margin: '10px auto',
        maxHeight: wh
      }}>
        <DZ />
      </div>
    );
  }
}



