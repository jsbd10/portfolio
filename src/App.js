import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/pages/About'
import Project from './Components/pages/projects'
import Contact from './Components/pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Project />
      <Contact />
    </Router>
  );
};

export default App;
