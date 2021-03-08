import React from 'react';
import Default from '../layouts/Default';
import { ProtectedRoute } from './ProtectedRoute';

export const DashboardRoute = ({ component: Component, ...rest }) => (
  <ProtectedRoute {...rest} render={props => (
    <Default>
      <Component {...props} />
    </Default>
  )} />
);
