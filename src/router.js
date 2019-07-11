import React from 'react';
import { Router, Route, Switch } from 'dva/router';
<<<<<<< HEAD
import IndexPage from './pages/IndexPage';
=======
import IndexPage from './pages/home/addtest/IndexPage';
>>>>>>> qbc
import LoginPage from './pages/login/IndexPage'
import HomePage from './pages/home/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
<<<<<<< HEAD
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
=======
        <Route path="/login" component={LoginPage} />
        <Route path="/home"  component={HomePage} />
>>>>>>> qbc
      </Switch>
    </Router>
  );
}

export default RouterConfig;
