import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { DashboardRoute } from './DashboardRoute';
import { Login } from '../pages/Login/Login';
import { List } from '../pages/PeopleList/List';
import { People } from '../pages/People/People';
import { useSelector } from 'react-redux';

const Router = () => {
  const { isLogin } = useSelector(state => state.user);

  return (
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      {
        isLogin && (
          <>
            <DashboardRoute path="/people-list" exact component={List} />
            <DashboardRoute path="/people/:id" exact component={People} />
          </>
        )
      }
    </Switch>
  );
};

export default Router;
