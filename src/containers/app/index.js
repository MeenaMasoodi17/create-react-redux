import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from '../home';
import About from '../about';
import Header from '../header';

const App = () => (
  <MuiThemeProvider>
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  </MuiThemeProvider>
);

export default App;
