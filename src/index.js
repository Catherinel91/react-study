import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './reducers/index'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App3 />
    </Router>
  </Provider>,
  document.getElementById('root')
);
