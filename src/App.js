import React from 'react';
import './App.css';

import HeroService from './heroService';
import { Dashboard } from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const heroService = new HeroService();

function App() {
  return (
    <Router>
      <Dashboard heroService={heroService} />
    </Router>
  );
}

export default App;
