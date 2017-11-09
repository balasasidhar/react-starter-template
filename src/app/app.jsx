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
import Product from './pages/product/product.jsx';
import AppLibrary from './pages/app_library/app_library.jsx';
import Learn from './pages/learn/learn.jsx';
import Price from './pages/price/price.jsx';
import Blog from './pages/blog/blog.jsx';

render(
    <Router history={Router.browserHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/product" component={Product}/>
            <Route path="/app-library" component={AppLibrary}/>
            <Route path="/learn" component={Learn}/>
            <Route path="/price" component={Price}/>
            <Route path="/blog" component={Blog}/>
            <Redirect to="/"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);