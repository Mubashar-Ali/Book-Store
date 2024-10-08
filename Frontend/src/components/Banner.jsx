import React from "react";
import pg from "../../public/pg.png";

function Banner() {
  return (
    
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center">
          <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-100 opacity-20 blur-[100px]"></div></div>

      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
            Welcome to the place where you can learn{" "}
            <span className="text-indigo-600">something new every day!</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Discover a world of knowledge and opportunities. Whether you're
            expanding your skills or starting fresh, we're here to guide you on
            a journey of continuous learning.
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-full">
              <label className="input input-bordered flex items-center gap-2 p-2 rounded-lg border border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow bg-transparent text-gray-700 dark:text-gray-300 focus:outline-none"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <button className="btn btn-secondary border-indigo-700 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-white transition-colors duration-300 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center md:justify-end">
        <img
          src={pg}
          className="w-full max-w-md md:max-w-lg rounded-lg transition-transform duration-300"
          alt="Learning Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
