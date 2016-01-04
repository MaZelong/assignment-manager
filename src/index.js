import React from 'react';
import { render } from 'react-dom'
import {Router, Route, Link } from 'react-router'
import { createHistory, useBasename } from 'history'

import App from './App'
import UserDashboard from './components/UserDashboard';

const history = useBasename(createHistory)({
  basename: '/'
});

render((
    <Router history={history}>
        <Route path={"/"} component={App} />
      <Route path={"/users"} component={UserDashboard} />
    </Router>), document.getElementById('root')
);
