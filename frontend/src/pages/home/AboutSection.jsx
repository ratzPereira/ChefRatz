import React from "react";
import AboutImg from "../../assets/about-image.jpg";

const AboutSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="text-start sm:w-1/2">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Healty food that everyone can do at home!
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-white text-white shadow-lg rounded px-8 py-4">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={AboutImg} alt="featured img" className="rounded-md" />
      </div>
    </div>
  );
};

export default AboutSection;
