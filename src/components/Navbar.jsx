import React, { useState } from "react";
import { LuX, LuText } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="bg-brown-500 mx-10 rounded-full drop-shadow-sm z-50">
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
          <h1 className="text-2xl font-rs cursor-pointer" onClick={closeNav}>
            Boitumelo.
          </h1>

          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            {nav ? (
              <LuX size={20} className="text-brown-900" />
            ) : (
              <LuText size={20} className="text-brown-900" />
            )}
          </div>

          <ul
            className={`md:flex ${
              nav ? "block" : "hidden"
            } md:items-center font-vng text-[18px] md:text-[35px]`}
          >
            <li className="p-4 cursor-pointer hover:text-brown-900">
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-brown-900">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-brown-900">
              <Link to="/books">Books</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-brown-900">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-brown-900">
              <Link to="/events">Events</Link>
            </li>
          </ul>

          <div className="hidden md:flex justify-end z-10 rounded">
            <button className="bg-lightbrown-500 hover:bg-brown-600 text-black py-2 px-10 rounded-full drop-shadow-md font-medium text-md text-center inline-flex items-center transition-all">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          nav ? "block" : "hidden"
        } bg-brown-500 h-screen py-4 rounded-md fixed left-0 top-0 w-full text-[18px] ease-in-out duration-500`}
      >
        <ul className="pt-8 p-4 font-vng">
          <li className="p-4 cursor-pointer hover:text-brown-900">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-brown-900">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-brown-900">
            <Link to="/books" onClick={closeNav}>
              Books
            </Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-brown-900">
            <Link to="/blog" onClick={closeNav}>
              Blog
            </Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-brown-900">
            <Link to="/events" onClick={closeNav}>
              Events
            </Link>
          </li>
        </ul>

        <div className="flex justify-center cursor-pointer">
          <button
            className="bg-lightbrown-500 text-[14px] cursor-pointer hover:bg-brown-500 text-black py-1 px-6 rounded-full drop-shadow-lg transition-all"
            onClick={closeNav}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
