/* eslint react/jsx-filename-extension: 0 */ // --> OFF

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import loadable from '@loadable/component';
import store from './redux';
import './scss/theme.scss';

const Bootstrap = loadable.lib(() => import('bootstrap/dist/css/bootstrap.min.css'));
const AppComponent = loadable(() => import('./App'), {
  fallback: <div>Please wait...</div>
});

const root = createRoot(document.querySelector('#app'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <Bootstrap />
      <AppComponent />
    </Provider>
  </StrictMode>
);
