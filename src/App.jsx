import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import loadable from '@loadable/component';

import routes from './config/routes.config';

import PrivateRoute from './components/PrivateRoute';
import DefaultNavbar from './components/DefaultNavbar';

const AsyncPage = loadable(props => import(`./views/${props.page}`), {
  fallback: <div>Loading...</div>
});

const App = () => (
  <Router>
    <DefaultNavbar routes={routes} />
    <Switch>
      {routes.map(({ component, exact, label, path, isPrivate }) =>
        isPrivate ? (
          <PrivateRoute exact={exact} key={label} path={path}>
            <AsyncPage page={component}></AsyncPage>
          </PrivateRoute>
        ) : (
          <Route exact={exact} key={label} path={path}>
            <AsyncPage page={component}></AsyncPage>
          </Route>
        )
      )}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
