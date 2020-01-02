import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Education from './Components/Education';


import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <main id="home" className="container">
          <Landing />
          <About />
          <Project />
          <Skills />
          <Education />
          <Footer />
        </main>
      </div>  
    );    
  }
}
export default App;
