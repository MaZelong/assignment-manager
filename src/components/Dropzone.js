/**
 * Created by devin on 1/4/16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Card, List, ListItem} from 'material-ui';
import {Assignment} from './Assignment';
import Dropzone from 'react-dropzone';
import axios from 'axios';
export default class DZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }
  onDrop(files) {
   console.log(files);
    this.setState({
      files: files
    })
  }

  sendFile() {
    axios.post('http://localhost:8080/api/submit', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

  }
  render() {
    return (
      <div style={{
        flexGrow: 1,
        minWidth: '10vw',
        overflowY: 'auto',
        marginLeft: '10px'
      }}>
        <button onClick={this.sendFile}></button>
        <Dropzone
          ref="dropzone"
          onDrop={this.onDrop}
          style= {{
            width: 400,
            height: 400, // need to adaptively adjust size better
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
          }}
        >
          <div> Click or Drag and Drop Files here to upload </div>
        </Dropzone>
        {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
        </div> : null}
      </div>
    );
  }
}
