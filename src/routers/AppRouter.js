import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import CatchallPage from '../components/CatchallPage';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/" 
                    component={DashboardPage} 
                    exact={true} 
                />
                <Route 
                    component={CatchallPage} 
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export {AppRouter as default};