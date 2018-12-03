import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import FrontPage from '../components/FrontPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import CompanyLoginPage from '../components/CompanyLoginPage';
import CompanyDashboardPage from '../components/CompanyDashboardPage';
import CompanyEditCarPage from '../components/CompanyEditCarPage';
import CompanyAddCarPage from '../components/CompanyAddCarPage';

export const history= createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch> {/* means if..elif..else , not if..if..if */}
                <Route path="/" component={FrontPage} exact={true} />
                <Route path="/dashboard" component={DashboardPage} exact={true}  />
                <Route path="/company-login" component={CompanyLoginPage} exact={true} />
                <Route path="/company-login/dashboard" component={CompanyDashboardPage} exact={true}/>
                <Route path="/company-login/dashboard/edit-car/:id" component={CompanyEditCarPage} />
                <Route path="/company-login/dashboard/add-car" component={CompanyAddCarPage}  />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

