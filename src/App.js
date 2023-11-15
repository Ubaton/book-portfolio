import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Newsletter from "./components/Newsletter";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div style={{ scrollBehavior: "smooth" }} className="bg-rose-500">
        <div className="bg-[url('images/hero.png')] bg-cover bg-left">
          <Navbar />
          <Hero />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
        </Routes>

        <Newsletter />
        <Reviews />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
