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
            Growing up in an environment full of expectations, as a young
            Christian girl Boitumelo lives up to those expectations. She put her
            faith in Christ in her teen years and thought that with the right
            foundation (Jesus) she would never be a disappointment in any way to
            those thinking highly of her including herself. But life doesn't
            turn out as expected when she makes bad choices and ends up leading
            a life of anxiety, depression, and anger. Today she has overcome and
            is learning to daily choose to forgive herself for her past mistakes
            because they do not define her. Anger issues? Are you living in
            anger and resentment towards yourself, others, or God? Do you
            struggle to overcome worry, depression, and unforgiveness all
            resulting in anger issues? This book is for your breakthrough. Stop
            And Start is a learning tool about:
            <ul>
              <li>*Our cognitive behavior to Anger</li>
              <li>*Reasons why we are entrapped by Anger</li>
              <li>* Our solution way tobreaking free from Ange</li>
            </ul>
          </p>
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
