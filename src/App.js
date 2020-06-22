import React from 'react';

import { Dashboard } from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HeroDetail } from './HeroDetail';
import { Heroes } from './Heroes';

import { a, h1, nav } from './styles/App.module.css';

function App() {
  const title = 'Tour of Heroes';
  return (
    <>
      <Router>
        <h1 className={h1}>{title}</h1>
        <nav className={nav}>
          <Link className={a} to='/dashboard'>
            Dashboard
          </Link>
          <Link className={a} to='/heroes'>
            Heroes
          </Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/heroes'>
            <Heroes />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/detail/:id'>
            <HeroDetail></HeroDetail>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
