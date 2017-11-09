/**
 * Created by sasidhar on 09/11/17.
 */

import './styles/styles.less';

import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route, Redirect, Switch
} from 'react-router-dom'

import Index from './pages/index/index.jsx';

render(
    <Router history={Router.browserHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Redirect to="/"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);