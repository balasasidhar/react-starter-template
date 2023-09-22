import React from 'react';
import loadable from '@loadable/component';
import Layout from '@components/Layout';

const AsyncPage = loadable(({ page }) => import(`@views/${page}`), {
  fallback: <div>Loading...</div>,
  cacheKey: (props) => props.page
});

export default [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <AsyncPage page="Home" />
      },

      {
        path: '/my-account',
        element: <AsyncPage page="MyAccount" />
      }
    ]
  },
  {
    path: '/login',
    element: <AsyncPage page="Login" />
  },
  {
    path: '/*',
    element: <h1>Not Found</h1>
  }
];
