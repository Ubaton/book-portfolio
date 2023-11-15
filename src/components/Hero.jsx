import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto text-center md:text-left p-8 md:p-16">
      <div className="text-3xl md:text-5xl lg:text-6xl text-brown-100 font-vng font-bold leading-tight md:leading-tight pb-12">
        <p className="pb-4">A Place to Read and Relax Your Mind</p>
        <h1 className="font-rs font-bold mt-4 md:mt-8 md:pl-10">
          Feed Your Thoughts
        </h1>
      </div>
      <div className="flex justify-center md:justify-start mt-6">
        <button className="ripple bg-lightbrown-500 hover:bg-brown-600 text-white py-2 px-6 md:px-10 rounded-full font-medium text-center text-md md:text-lg lg:text-xl drop-shadow-md transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
