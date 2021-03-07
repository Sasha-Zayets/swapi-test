import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = (props) => {
  const { isLogin } = useSelector((state) => state.user);

  if (isLogin) {
    return <Redirect to="/list" />;
  }

  return <Route {...props} />;
};
