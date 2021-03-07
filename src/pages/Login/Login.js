import React from 'react';
import Auth from '../../layouts/Auth';
import {
  FormWrapper,
  FormTitle,
  WrapperLoginButton,
} from './styles';

export const Login = () => (
  <Auth>
    <FormWrapper>
      <FormTitle>Log in</FormTitle>
      <WrapperLoginButton>
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        />
      </WrapperLoginButton>
    </FormWrapper>
  </Auth>
);
