import React from 'react';
import Hero from './components/heroero';
import Events from './components/eventsvents';
import Updates from './components/updatespdates';
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