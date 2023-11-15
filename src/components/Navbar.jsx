import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="bg-brown-500 mx-10 rounded-full drop-shadow-sm">
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
          <h1 className="text-2xl font-rs cursor-pointer" onClick={closeNav}>
            Boitumelo.
          </h1>
          <ul className="hidden md:flex justify-center font-vng text-[35px]">
            <li
              className="p-4 cursor-pointer hover:text-brown-900"
              onClick={closeNav}
            >
              <a href="#Home">Home</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:text-brown-900"
              onClick={closeNav}
            >
              <a href="#About">About</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:text-brown-900"
              onClick={closeNav}
            >
              <a href="#Books">Books</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:text-brown-900"
              onClick={closeNav}
            >
              <a href="#Books">Blog</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:text-brown-900"
              onClick={closeNav}
            >
              <a href="#Books">Events</a>
            </li>
          </ul>

          <div className="hidden md:flex justify-end z-10 rounded">
            <button className="bg-lightbrown-500 hover:bg-brown-600 text-black py-2 px-10 rounded-full drop-shadow-md font-medium text-md text-center inline-flex items-center transition-all">
              Login
            </button>
          </div>

          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              nav
                ? "bg-brown-500 h-screen py-4 rounded-md fixed left-0 top-0 w-full text-[18px] ease-in-out duration-500"
                : "hidden"
            }
          >
            <ul className="pt-8 p-4 font-vng">
              <li
                className="p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900"
                onClick={closeNav}
              >
                <a href="#Home">Home</a>
              </li>
              <li
                className="p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900"
                onClick={closeNav}
              >
                <a href="#About">About</a>
              </li>
              <li
                className="p-4 border-b border-lightbrown-500 cursor-pointer hover:text-brown-900"
                onClick={closeNav}
              >
                <a href="#Books">Books</a>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
