import React from 'react';
import { render } from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import App from './App';
import UserDashboard from './components/UserDashboard';
import Submission from './components/Submission';
render((
    <Router history={browserHistory}>
      <Route path={"/"} component={App} >
        <Route path={"/assignments"} component={UserDashboard} />
        <Route path={"/submit"} component={Submission} />
      </Route>
    </Router>), document.getElementById('root')
);
