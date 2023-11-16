import React from "react";
import boity from "../images/boity.jpg";

const About = () => {
  return (
    <div className="container mx-auto bg-rose-500 py-8 px-4 md:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto gap-6 p-8">
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="mx-auto my-4 md:my-0 rounded-lg  shadow-lg"
            src={boity}
            alt="Boity"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-vng text-4xl md:text-5xl text-white px-4 md:px-0">
            About
          </h1>
          <p className="py-5 px-4 md:px-0 text-lg md:text-2xl text-white">
            Boitumelo Ngobeni is an exceptional young extraordinary lady. As a
            young wife and mother, she put her heart into writing and believes
            that this is her gift from God. As a Christian woman, she believes
            that God is using her as a Vassel to bring many young people closer
            to Jesus Christ and His saving Grace. She considers herself a nobody
            who has not achieved much, yet she believes that one doesn't need
            achievements to impact lives. One thing Boitumelo stands true to are
            her words to the world: "Until you find your gift and use it to
            impact others positively, you haven't found your purpose in life.
            You are living to be served and not to serve".
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
