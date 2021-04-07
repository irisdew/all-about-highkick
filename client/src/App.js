import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
