import React from "react";
import avatar from "../images/avatar.png";

const Reviews = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-rose-500">
      <div className="text-white text-5xl font-vng text-center py-5">
        Reviews
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="hover:cursor-pointer w-full shadow-xl border border-rose-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 transition-all"
          >
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white rounded-full"
              src={avatar}
              alt={`User ${index}`}
            />
            <h2 className="text-2xl font-bold text-center py-8 font-vng text-white">
              Username{index}
            </h2>
            <p className="text-center text-2xl text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            {/* //////Add a like button////// */}
            <div>{/* Add your like button component here */}</div>
          </div>
        ))}
      </div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-white"
      >
        Your Book Review
      </label>
      <textarea
        id="message"
        rows="2"
        className="block p-2.5 w-full text-sm text-brown-900 bg-lightwhite-500 rounded-lg border border-lightbrown-300 focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-700 dark:border-brown-600 dark:placeholder-brown-400 dark:text-white dark:focus:ring-brown-500 dark:focus:border-brown-500"
        placeholder="Leave a comment..."
      ></textarea>
    </div>
  );
};

export default Reviews;
