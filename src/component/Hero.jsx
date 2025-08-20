import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "bg-imag.jpg",
    "bg-image2.jpg",  // replace with your 2nd image path
    "bg-image3.jpg",  // replace with your 3rd image path
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full h-screen bg-cover bg-center filter brightness-100 flex flex-col items-center justify-center px-4 sm:px-8 transition-bg duration-1000"
      style={{ backgroundImage: `url('${images[currentIndex]}')` }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fadeSlideColor z-20 text-center">
        Welcome to{" "}
        <span className="bg-blue-800 p-1 sm:p-2 inline-block">KONSTRUCTO</span>
      </h1>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white animate-fadeSlideColor animation-delay-100 text-center max-w-xl">
        Leading the way in solar energy solutions
      </p>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white mt-4 sm:mt-5">
        Read more
      </button>
    </div>
  );
};

export default Hero;
