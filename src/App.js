import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hore';


function App() {
  return (
    <div className="bg-[url('images/hero.png')] bg-cover">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
