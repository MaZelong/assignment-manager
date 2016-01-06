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
    this.sendFile(files[0]);
    this.setState({
      files: files
    })
  }

  sendFile(file) {
    console.log(window.location)
    console.log('about to post');
    let wl = window.location;
    let options = {
      headers: {
        'Content-Type': file.type
      }
    };
    axios.put('http://localhost:8080/api' + wl.pathname + wl.search + '&user=' + window.localStorage._amtoken, file, options)
      .then(function (result) {
        console.log(result);
        console.log(result.config.data.name + " uploaded");
      })
      .catch(function (err) {
        console.log(err);
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
        <Dropzone
          ref="dropzone"
          onDrop={this.onDrop.bind(this)}
          style= {{
            width: '45vw',
            height: '80vh', // need to adaptively adjust size better
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
          }}
        >
          <div>
            <div style={{
              textAlign: 'center'
            }}>
              <h3>
                Upload Drop Area
              </h3>
            </div>
            <div>
              The following files should uploaded:
              <List>
                <ListItem> Phoenix Project </ListItem>
                <ListItem> Project folder with all required Rmarkdown Files </ListItem>
              </List>
            </div>
          </div>
        </Dropzone>
      </div>
    );
  }
}
