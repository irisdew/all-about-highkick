import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Intro';
import Test from './pages/Test';
import GameMain from './pages/Game/GameMain';
import GameResult from './pages/Game/GameResult';
import GameAll from './pages/Game/GameAll';
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
        <Route exact path="/game" component={GameMain} />
        <Route exact path="/game/result" component={GameResult} />
        <Route exact path="/game/all" component={GameAll} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </Router>
  );
}

export default App;
