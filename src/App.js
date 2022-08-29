
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FormInput from './Pages/FormInput';


function App() {
  return (
    <>
        <div className="bg-[url('images/hero.png')] bg-cover bg-left">
          <Navbar/>
          <Hero/>
        </div>

        <About/>
        <Books/>
        <Newsletter/>
        <Reviews/>
        <Footer/>
        <FormInput/>
    </>
  );
}

export default App;
