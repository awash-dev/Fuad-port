import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 dark:text-white transition-all duration-300  h-[100vh] w-full items-center flex justify-center">
      <div className="flex items-center   justify-around h-full w-full">
        {/* image section */}
        <div className="hidden xl:flex rounded-custom  bg-gradient-to-r from-cyan-500  to-blue-600 w-[300px] h-[300px]">
          <img
            className=" hidden xl:flex rounded-custom border-8 bg-gradient-to-r from-cyan-500  to-blue-600 w-[280px] h-[280px]"
            src="/fuad.jpg"
            alt="hero"
          />
        </div>

        {/* text container */}
        <div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-[35px] font-bold">Hi, I'm Fuad seid 🤚</h1>
            <h2 className=" text-[30px]">I'm a Full Stack Developer.</h2>
            <p className=" text-bold text-[20px]">🌎 based in Ethiopia</p>
            <p className=" text-bold text-[20px]">💼 Software Engineer</p>
            <p className=" text-bold text-[20px]">
              📧 mohammed.dev.et@gmail.com
            </p>
            <div className="flex gap-10 text-2xl text-center items-center justify-center mt-2">
              <Link
                className="bg-gradient-to-r from-cyan-500  to-blue-600 text-center text-white w-[120px] capitalize rounded-xl p-2 hover:shadow-2xl hover:scale-105 transition-all duration-200 "
                href="/"
              >
                say hi
              </Link>
              <Link
                className="bg-gradient-to-r from-cyan-500  to-blue-600 text-center text-white w-[120px] capitalize rounded-xl p-2 hover:shadow-2xl hover:scale-105 transition-all duration-200"
                href="/"
              >
                {" "}
                resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
