import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/dashboard';
import Chart from '../pages/chart';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/chart" component={Chart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
