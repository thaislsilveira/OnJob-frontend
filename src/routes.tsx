import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routes/index';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
