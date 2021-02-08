import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import PrivateRoute from '@components/PrivateRoute';
import DefaultNavbar from '@components/DefaultNavbar';

import routes from '@config/routes.config';

const AsyncPage = loadable((props) => import(`./views/${props.page}`), {
  fallback: <div>Loading...</div>,
  cacheKey: (props) => props.page
});

const App = () => (
  <Router>
    <DefaultNavbar routes={routes} />
    <Switch>
      {routes.map(({ component, exact, label, path, isPrivate }) =>
        isPrivate ? (
          <PrivateRoute exact={exact} key={label} path={path}>
            <AsyncPage page={component} />
          </PrivateRoute>
        ) : (
          <Route exact={exact} key={label} path={path}>
            <AsyncPage page={component} />
          </Route>
        )
      )}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
