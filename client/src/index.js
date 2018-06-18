import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  //provider comonents detects new states in store and alert all child components of changes
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
