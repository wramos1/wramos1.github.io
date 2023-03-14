import React from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
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
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
