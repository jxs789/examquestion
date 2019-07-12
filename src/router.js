import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './pages/home/addtest/IndexPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/IndexPage'
import HomePage from './pages/home/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home"  component={HomePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
