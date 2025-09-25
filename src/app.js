import React from 'react';
import Hero from './components/hero';
import Events from './components/events';
import Updates from './components/updates';
import './app.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Updates />
      <Events />
    </div>
  );
}

export default App;
