import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordRecovery from '../pages/PasswordRecovery';
import Students from '../pages/Students';
import Student from '../pages/Student';
import PhotosStudents from '../pages/PhotosStudents';
import ReportStudent from '../pages/ReportStudent';
import ProfileUser from '../pages/ProfileUser';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Students} isAuthentication />
      <PrivateRoute
        exact
        path="/student/:id"
        component={Student}
        isAuthentication
      />
      <PrivateRoute
        exact
        path="/photos/student/:id"
        component={PhotosStudents}
        isAuthentication
      />
      <PrivateRoute
        exact
        path="/report/student/:id"
        component={ReportStudent}
        isAuthentication
      />
      <PrivateRoute
        exact
        path="/profile/user"
        component={ProfileUser}
        isAuthentication
      />
      <PrivateRoute
        exact
        path="/register"
        component={Register}
        isAuthentication
      />
      <PrivateRoute
        exact
        path="/login"
        component={Login}
        isAuthentication={false}
      />
      <PrivateRoute
        exact
        path="/forgot/password"
        component={ForgotPassword}
        isAuthentication={false}
      />
      <PrivateRoute
        exact
        path="/recovery/password"
        component={PasswordRecovery}
        isAuthentication={false}
      />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
