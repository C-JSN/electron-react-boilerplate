/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MainPage from './containers/MainPage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </App>
  </Router>
);
