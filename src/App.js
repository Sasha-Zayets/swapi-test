import React, { useEffect } from 'react';
import Router from './routes/Router';
import { useDispatch } from 'react-redux';
import { changeAuthStatus } from './actions/userActions';

const App = ({ isAuth }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeAuthStatus(isAuth));
  }, [isAuth, dispatch]);

  return <Router />;
};

export default App;
