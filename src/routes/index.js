import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/dashboard';
import Policy from '../pages/policy/index';
import TravelPolicy from '../pages/policy/Travel/index';
import HealthPolicy from '../pages/policy/Health/index';
import MotorPolicy from '../pages/policy/Motor/index';
import Insurances from '../pages/insurances';
import Transactions from '../pages/transactions';
import NotFoundPage from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import Customer from '../pages/customer';
import CustomerDetail from '../pages/customer/customerDetail';

const Routes = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/insurance" component={Insurances} />
      <PrivateRoute exact path={['/policies/:type', '/policies']} component={Policy} />
      <PrivateRoute exact path="/policies/travel/:id" component={TravelPolicy} />
      <PrivateRoute exact path="/policies/health/:id" component={HealthPolicy} />
      <PrivateRoute exact path="/policies/motor/:id" component={MotorPolicy} />
      <PrivateRoute exact path="/transactions" component={Transactions} />
      <PrivateRoute exact path="/customers" component={Customer} />
      <PrivateRoute exact path="/customer/:id" component={CustomerDetail} />
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect exact to="/404" />
    </Switch>
  </Provider>
);

export default Routes;
