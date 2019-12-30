import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import loadable from '@loadable/component';
import store from './redux';
import './scss/theme.scss';

const Bootstrap = loadable.lib(() => import('bootstrap/dist/css/bootstrap.min.css'));
const AppComponent = loadable(() => import('./App'), {
  // eslint-disable-next-line react/jsx-filename-extension
  fallback: <div>Please wait...</div>
});

render(
  <Provider store={store}>
    <Bootstrap />
    <AppComponent />
  </Provider>,
  document.querySelector('#app')
);
