import React from 'react';
import { Router, Route, Switch } from 'dva/router';
<<<<<<< HEAD
import IndexPage from './pages/home/addtest/IndexPage';
=======
<<<<<<< HEAD
import IndexPage from './pages/IndexPage';
=======
import IndexPage from './pages/home/addtest/IndexPage';
>>>>>>> qbc
>>>>>>> qbc
import LoginPage from './pages/login/IndexPage'
import HomePage from './pages/home/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
<<<<<<< HEAD
        <Route path="/login" component={LoginPage} />
        <Route path="/home"  component={HomePage} />
=======
<<<<<<< HEAD
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
=======
        <Route path="/login" component={LoginPage} />
        <Route path="/home"  component={HomePage} />
>>>>>>> qbc
>>>>>>> qbc
      </Switch>
    </Router>
  );
}

export default RouterConfig;
