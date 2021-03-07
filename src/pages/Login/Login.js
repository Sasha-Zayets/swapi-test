import React from 'react';
import Auth from '../../layouts/Auth';
import {
  FormWrapper,
  FormTitle,
  WrapperLoginButton,
} from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/UserActions';

export const Login = () => {
  const dispatch = useDispatch();

  const checkLoginState = () => {
    dispatch(login());
  };

  return (
    <Auth>
      <FormWrapper>
        <FormTitle>Log in</FormTitle>
        <WrapperLoginButton>
          <div className="fb-login-button">
            <button onClick={checkLoginState}>login in facebook</button>
          </div>
        </WrapperLoginButton>
      </FormWrapper>
    </Auth>
  );
};
