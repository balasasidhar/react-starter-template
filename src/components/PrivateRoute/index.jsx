import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const isAuthenticated = () => false;

const PrivateRoute = ({ children, exact, path }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (isAuthenticated() ? children : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.instanceOf(Object),
  exact: PropTypes.bool,
  path: PropTypes.string
};

PrivateRoute.defaultProps = {
  children: {},
  exact: false,
  path: '/'
};

export default PrivateRoute;
