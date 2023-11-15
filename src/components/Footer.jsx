import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container bg-white rounded-lg mx-auto py-8 px-4 lg:grid lg:grid-cols-3 gap-8 text-brown-700">
        <div>
          <h1 className="text-xl font-rs cursor-pointer py-2">Boitumelo.</h1>
          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex md:w-[75%] my-6">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagramSquare size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
            <FaYoutubeSquare size={30} className="cursor-pointer" />
            <FaWhatsappSquare size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
          {[1, 2, 3].map((index) => (
            <div key={index} className="w-full lg:w-[30%]">
              <h6 className="font-vng text-2xl text-brown-900">Solutions</h6>
              <ul>
                <li className="py-2 text-sm hover:text-brown-900 cursor-pointer ">
                  About
                </li>
                <li className="py-2 text-sm hover:text-brown-900 cursor-pointer ">
                  Marketing
                </li>
                <li className="py-2 text-sm hover:text-brown-900 cursor-pointer ">
                  Insights
                </li>
                <li className="py-2 text-sm hover:text-brown-900 cursor-pointer ">
                  Books
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center bg-brown-500 py-3">
        <p className="text-white flex items-center">
          © 2022 Boitumelo Ngobeni. All rights reserved by Creative Minds
          Graphics.
        </p>
      </div>
    </>
  );
};

export default Footer;
