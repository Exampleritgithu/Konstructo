import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center filter brightness-100 flex flex-col items-center justify-center px-4 sm:px-8"
      style={{ backgroundImage: "url('bg-imag.jpg')" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white z-20 text-center">
        Welcome to{" "}
        <span className="bg-blue-800 p-1 sm:p-2 inline-block">KONSTRUCTO</span>
      </h1>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white text-center max-w-xl">
        Leading the way in solar energy solutions
      </p>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white mt-4 sm:mt-5">
        Read more
      </button>
    </div>
  );
};

export default Hero;
