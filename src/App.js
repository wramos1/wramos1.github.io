import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
