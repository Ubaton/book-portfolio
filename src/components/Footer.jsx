import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link
              to="https://www.facebook.com/boitumelo.boity.1213?mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebookSquare size={30} className="cursor-pointer" />
            </Link>
            <Link
              to="https://instagram.com/tumiturnup_the.author?utm_source=qr&igshid=YzU1NGVlODEzOA=="
              target="_blank"
            >
              <FaInstagramSquare size={30} className="cursor-pointer" />
            </Link>
            <Link to="https://www.youtube.com/@tumiturnup599" target="_blank">
              <FaYoutubeSquare size={30} className="cursor-pointer" />
            </Link>
            <Link to="" target="_blank">
              <FaWhatsappSquare size={30} className="cursor-pointer" />
            </Link>
            <Link
              to="https://www.tiktok.com/@the.ngobz.familia?_t=8hPOFVAb9V8&_r=1"
              target="_blank"
            >
              <div className="text-brown-500 cursor-pointer">
                <svg
                  fill="#c5a28f"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z" />
                </svg>
              </div>
            </Link>
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
          © 2022 Boitumelo Ngobeni. All rights reserved by
          <span className="hover:underline">
            <Link to="https://creativemg.netlify.app/">
              Creative Minds Graphics (Pty) Ltd.
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
