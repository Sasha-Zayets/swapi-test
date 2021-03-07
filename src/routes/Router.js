import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { Login } from '../pages/Login/Login';
import { List } from '../pages/List/List';

const Router = () => (
  <Switch>
    <PublicRoute path="/" exact component={Login} />
    <ProtectedRoute path="/list" exact component={List} />
  </Switch>
);

export default Router;
