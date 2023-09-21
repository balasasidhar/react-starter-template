import React from 'react';
import Home from '@views/Home';
import Login from '@views/Login';
import MyAccount from '@views/MyAccount';
import loadable from '@loadable/component';

const AsyncPage = loadable(({ page }) => import(`@views/${page}`), {
  fallback: <div>Loading...</div>,
  cacheKey: (props) => props.page
});

export default [
  {
    label: 'Home',
    path: '/',
    element: <AsyncPage page={Home.name} />,
    exact: true
  },
  {
    label: 'Login',
    path: '/login',
    element: <AsyncPage page={Login.name} />
  },
  {
    label: 'My Account',
    path: '/my-account',
    element: <AsyncPage page={MyAccount.name} />
  }
];
