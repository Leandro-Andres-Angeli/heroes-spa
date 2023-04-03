import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;