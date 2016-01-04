import React from 'react';
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import App from './App'
const history = useBasename(createHistory)({
    basename: '/'
});
render((
    <Router history={history}>
        <Route path={"/"} component={App} />
    </Router>), document.getElementById('root'));
