import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Intro';
import Test from './pages/Test';
import Game from './pages/Game';
import Characters from './pages/Characters';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
        <Route exact path="/game" component={() => <Game page="main" />} />
        <Route
          exact
          path="/game/result"
          component={() => <Game page="result" />}
        />
        <Route exact path="/game/all" component={() => <Game page="all" />} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </Router>
  );
}

export default App;
