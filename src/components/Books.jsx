import React from "react";
import book from "../images/book.jpg";

const Books = () => {
  return (
    <div className="container mx-auto bg-rose-500 py-8 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto gap-6 p-8">
        <div className="text-center md:text-left">
          <h1 className="font-vng text-4xl md:text-5xl text-white px-4 md:px-0">
            Books
          </h1>
          <p className="py-5 px-4 md:px-0 text-lg md:text-2xl text-white">
            Boitumelo, a young Christian girl, faced the pressure of living up
            to high expectations in her environment. Despite putting her faith
            in Christ during her teen years, she experienced unexpected
            challenges, making bad choices that led to a life marked by anxiety,
            depression, and anger. Over time, she managed to overcome these
            struggles and learned to daily forgive herself, recognizing that her
            past mistakes don't define her. "Stop And Start" as a learning tool
            specifically designed for those dealing with anger, resentment,
            worry, depression, and unforgiveness, offering a pathway to
            breakthroughs in these areas:
          </p>
          <ul className="py-5 px-4 md:px-0 text-lg md:text-2xl text-white">
            <li>*Our cognitive behavior to Anger</li>
            <li>*Reasons why we are entrapped by Anger</li>
            <li>* Our solution way tobreaking free from Anger</li>
          </ul>
        </div>
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="mx-auto my-4 md:my-0 rounded-lg  shadow-lg"
            src={book}
            alt="Book"
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
