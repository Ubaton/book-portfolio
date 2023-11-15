import React from "react";

const Newsletter = () => {
  return (
    <div className="container mx-auto py-8 text-white bg-brown-500 rounded-lg px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1240px] mx-auto">
        <div className="col-span-2 my-6">
          <h1 className="font-vng md:text-5xl sm:text-3xl text-2xl">
            Let me know your feedback about the books
          </h1>
          <p>Sign up for my newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              id="emailInput"
              className="bg-lightwhite-500 border border-brown-300 text-brown-900 text-sm rounded-full focus:ring-brown-500 focus:border-brown-500 block w-full p-2.5 dark:bg-lightbrown-400 dark:border-lightbrown-200 dark:placeholder-brown-800 dark:text-brown-800 dark:focus:ring-brown-700 dark:focus:border-brown-700"
              placeholder="Enter Email"
            />
            <button className="hover:bg-brown-600 drop-shadow-md bg-lightbrown-600 text-white rounded-full font-semibold w-full md:w-[200px] ml-0 sm:ml-4 my-6 px-6 py-3 transition-all">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-brown-900 cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
