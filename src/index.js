import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './store';
import Transactions from './containers/Transactions';

import './assets/styles/index.css';

ReactDOM.render(
  <div id="app" className="app">
    <Provider store={store}>
      <Router>
        <Route exact path="/settings" component={Settings}>
          <Route path="/categories" component={Categories} />
        </Route>
        <Route exact path="/transactions" component={Transactions} />
        <Redirect from="/" to="/transactions" />
      </Router>
    </Provider>
  </div>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
