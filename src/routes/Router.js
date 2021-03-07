import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';

const Router = () => (
  <Switch>
    <Route path="/" component={Login} />
  </Switch>
);

export default Router;
