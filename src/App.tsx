import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppUser from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppUser>
        <Routes />
      </AppUser>
      <GlobalStyle />
    </Router>
  );
};

export default App;
