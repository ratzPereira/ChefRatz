import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for my weekly newsletter!
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Weekly newsletter with recipes, tips, and more. <br /> Unsubscribe at
        any time.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]"
          type="text"
          placeholder="Name"
        />
        <input
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]"
          type="text"
          placeholder="Email Address"
        />

        <button className="mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-white text-white shadow-lg rounded px-8 py-4">
          Get started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
