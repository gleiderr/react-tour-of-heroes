import React from 'react';
import './App.css';

import HeroService from './heroService';
import MessageService from './messageService';
import { Dashboard } from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HeroDetail } from './HeroDetail';

const messageService = new MessageService();
const heroService = new HeroService(messageService);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard heroService={heroService} />
        </Route>
        <Route path='/dashboard'>
          <Dashboard heroService={heroService} />
        </Route>
        <Route path='/detail/:id'>
          <HeroDetail></HeroDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
