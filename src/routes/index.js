import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from "../pages/dashboard";
import Chart from "../pages/chart";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/chart" component={Chart} />
            {/*<Route exact path="/404" component={NotFoundPage} />*/}
            <Redirect exact to="/404" />
        </Switch>
    </BrowserRouter>
);

export default Routes;
