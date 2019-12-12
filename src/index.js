import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import loadable from '@loadable/component';

const Bootstrap = loadable.lib(() =>
  import('bootstrap/dist/css/bootstrap.min.css')
);
const AppComponent = loadable(() => import('./App'), {
  fallback: <div>Please wait...</div>
});

import store from './redux';

render(
  <Provider store={store}>
    <Bootstrap />
    <AppComponent />
  </Provider>,
  document.querySelector('#app')
);
