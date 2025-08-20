import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Main Contact Box */}
      <div className="bg-blue-950 w-full py-10 mt-10 rounded-2xl flex flex-col lg:flex-row justify-between items-center p-5 lg:p-10 gap-8">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-6">
            Contact Us to Explore How We Can Help!
          </h2>
          <p className="text-white text-2xl sm:text-3xl font-bold max-w-lg mx-auto lg:mx-0">
            We’re pleased to be welcoming customers to join us.
          </p>

          {/* Contact Buttons */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <button className="border-2 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-300">
              Contact Us
            </button>
            <a
              href="tel:+923040510507"
              className="border-2 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-300"
            >
              +92-304-0510507
            </a>
            <a
              href="tel:+923355400848"
              className="border-2 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-300"
            >
              +92-335-5400848
            </a>
            <a
              href="tel:+923071515315"
              className="border-2 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-300"
            >
              +92-307-1515315
            </a>
          </div>

          {/* Location with Icon */}
          <h2 className="text-white mt-6 font-bold flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-yellow-400 text-lg sm:text-xl" />
            Jinnah Garden, Phase-1, Main Expressway, Navel Anchorage
          </h2>
          <h2 className="text-white mt-6 font-bold flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-yellow-400 text-lg sm:text-xl" />
            Office #05, 1st floor, City Squar, gate no 01, block B, Multi Gardens B-17 , Islamabad
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="flex-shrink-0">
          <img
            src="baba.svg"
            alt="Contact Illustration"
            className="w-64 sm:w-80 lg:w-96 h-auto"
          />
        </div>
      </div>

      {/* Bottom Yellow Decorative Bar */}
      <div className="bg-yellow-500 rounded-3xl -mt-3 w-full h-[20px] sm:h-[30px]"></div>
    </div>
  );
};

export default Contact;
