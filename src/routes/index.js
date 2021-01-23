import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
