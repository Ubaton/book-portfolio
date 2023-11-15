import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto text-center md:text-left p-8 md:p-16">
      <div className="text-3xl md:text-5xl lg:text-6xl text-rose-600 font-vng font-bold leading-tight md:leading-tight pb-12">
        <p>A Place to Read and Relax Your Mind</p>
        <h1 className="font-rs font-bold mt-4 md:mt-8">Feed Your Thoughts</h1>
      </div>
      <div className="flex justify-center md:justify-start mt-6 z-0">
        <button className="ripple bg-lightbrown-500 hover:bg-brown-600 text-black py-2 px-6 md:px-10 rounded-full text-center text-md md:text-lg lg:text-xl drop-shadow-md transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
