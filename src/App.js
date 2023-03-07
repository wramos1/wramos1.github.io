import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Work from './pages/Work';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Work />
    </React.Fragment>
  );
}

export default App;
