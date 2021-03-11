import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Routes from './routes/Routes';
import {store} from './reducers/index'

import './index.css';


ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  document.getElementById('root')
);

