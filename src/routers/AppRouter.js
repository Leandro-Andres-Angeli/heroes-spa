import React, { useContext } from 'react';
import {  BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const AppRouter = () => {
  const {user:{logged : isAuthenticated} } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path='/login' {...{isAuthenticated}} component={LoginScreen} />
          <PrivateRoute path='/' {...{isAuthenticated}} component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
