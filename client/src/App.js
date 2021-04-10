import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Intro';
import Test from './pages/Test';
import Game from './pages/Game';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
