import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hore';
import About from './components/About';
import Books from './components/Books';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <>
      <div className="bg-[url('images/hero.png')] bg-cover">
        <Navbar/>
        <Hero/>
      </div>

      <About/>
      <Books/>
      <Newsletter/>
    </>
  );
}

export default App;
