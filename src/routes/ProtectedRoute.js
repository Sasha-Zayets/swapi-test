import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = (props) => {
  const { isLogin } = useSelector((state) => state.user);

  if (isLogin) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};
