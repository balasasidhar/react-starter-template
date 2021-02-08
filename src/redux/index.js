/* eslint-disable no-undef */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';

import rootReducer from '@reducers';

const client = axios.create({
  baseURL: 'http://localhost:8080/api',
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middlewares = [thunk, axiosMiddleware(client)];

if (__DEV__) middlewares = [...middlewares, logger];

export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
