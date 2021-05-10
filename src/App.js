import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './Components/index'
import About from './Components/About'
import Project from './Components/projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params= {{
                  particles: {
                    number:{
                      value: 60,
                      density:{
                        enabled: true,
                        value_area: 900
                      }
                    },
                    shape: {
                      type: 'circle',
                      stroke:{
                        width: 8,
                        color: "#f9ab00"
                      }
                    }
                  }
        }}
      />
      <Navbar />
      <About />
      {/* <Project />
      <Contact /> */}
      </>
  );
};

export default App;
