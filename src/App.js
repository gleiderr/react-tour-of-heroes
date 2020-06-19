import React from 'react';
import './App.css';

import { Dashboard } from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HeroDetail } from './HeroDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/detail/:id'>
          <HeroDetail></HeroDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
