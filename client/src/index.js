//if no relative path assume node modules
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  //provider comonents detects new states in store and alert all child components of changes
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
