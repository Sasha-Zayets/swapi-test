import React, { useEffect } from 'react';
import Router from './routes/Router';
import { useDispatch } from 'react-redux';
import { isLoginUser } from './actions/UserActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoginUser());
  }, [dispatch]);

  return (
    <Router />
  );
};

export default App;
