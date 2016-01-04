import React from 'react';
import { render } from 'react-dom'
import {Router, Route, Link } from 'react-router'
import App from './App'
import { createHistory, useBasename } from 'history'
const history = useBasename(createHistory)({
  basename: '/'
});
render((
    <Router history={history}>
        <Route path={"/"} component={App} />
    </Router>), document.getElementById('root'));
