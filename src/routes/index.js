import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/dashboard';
import Chart from '../pages/chart';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/chart" component={Chart} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;
