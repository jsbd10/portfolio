import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </Router>
  );
};

export default App;
