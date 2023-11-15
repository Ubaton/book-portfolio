import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Newsletter from "./components/Newsletter";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="scroll-behavior: smooth bg-rose-500">
      <div className="bg-[url('images/hero.png')] bg-cover bg-left">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Books />
      <Newsletter />
      <Reviews />
      <Footer />
    </section>
  );
}

export default App;
