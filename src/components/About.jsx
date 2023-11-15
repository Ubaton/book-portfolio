import React from "react";
import boity from "../images/boity.jpg";

const About = () => {
  return (
    <div className="container mx-auto bg-rose-500 py-8 px-4 md:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto gap-6 p-8">
        <div>
          <img
            className="mx-auto my-4 md:my-0 rounded-lg"
            src={boity}
            alt="Boity"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-vng text-4xl md:text-5xl text-white px-4 md:px-0">
            About
          </h1>
          <p className="py-5 px-4 md:px-0 text-lg md:text-2xl text-white">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
