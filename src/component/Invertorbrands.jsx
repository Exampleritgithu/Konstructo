import React from "react";
import Marquee from "react-fast-marquee";

const brandImages = [
  { src: "growatt.png", alt: "Longi" },
  { src: "crown.png", alt: "Astro" },
  { src: "chint.jpeg", alt: "Jinko" },
  { src: "itel.png", alt: "JA Solar" },
  { src: "solis.jpeg", alt: "Canadian Solar" },
  { src: "fronus.jpeg", alt: "TW Solar" },
  { src: "dot.avif", alt: "Dot" },
  { src: "trina.png", alt: "Trina Solar" },
];

const Invertorbrands = () => {
  return (
    <main className="relative font-poppins mt-24 bg-gradient-to-br from-[#ffb800] via-[#ff9800] to-[#ffb800] h-full flex justify-center items-center py-16 px-4 sm:px-8 lg:px-16">
      {/* Shapes */}
      <div className="h-6 w-16 md:h-14 md:w-40 bg-[#1C204B] rounded-tr-full rounded-br-full absolute left-0 bottom-2 z-10 shadow-xl"></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-6 left-8 md:bottom-12 md:left-24 shadow-xl z-10"></div>
      <div className="h-6 w-16 md:h-14 md:w-40 bg-[#1C204B] rounded-tl-full rounded-bl-full absolute right-0 top-3 z-10 shadow-xl"></div>
      <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 md:right-24 shadow-xl z-10"></div>

      {/* Content */}
      <div className="flex flex-col gap-8 md:gap-12 justify-center items-center text-center w-full max-w-7xl z-10 py-6">
        <div className="px-2 md:px-4 gap-3 flex flex-col">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl uppercase font-bold font-funnel tracking-wider">
            Our Inverter Brands
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[65%] xl:w-[60%] self-center flex font-krona text-white drop-shadow-md mx-auto">
            Our Solar solution uses advanced technologies for a scalable platform
          </h2>
        </div>

        {/* Marquees */}
        <div className="relative w-full flex flex-col items-center">
          {/* Top Marquee */}
          <Marquee
            direction="right"
            speed={30}
            autoFill={true}
            className="mb-3 overflow-hidden relative w-full"
          >
            <div className="flex space-x-4 md:space-x-6">
              {brandImages.map((brand, idx) => (
                <img
                  key={idx}
                  src={brand.src}
                  alt={brand.alt}
                  className="w-12 sm:w-16 md:w-20 h-auto p-1 sm:p-2 mx-1 md:mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                />
              ))}
            </div>
          </Marquee>

          {/* Overlay Logo */}
          <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
            <div className="border border-solid rounded-full bg-white border-white shadow-lg p-1 sm:p-3">
              <img
                src="Logo.png"
                className="w-16 sm:w-24 h-auto"
                alt="Overlay"
              />
            </div>
          </div>

          {/* Bottom Marquee */}
          <Marquee
            direction="left"
            speed={30}
            autoFill={true}
            className="mt-3 overflow-hidden relative w-full"
          >
            <div className="flex space-x-4 md:space-x-6">
              {brandImages.map((brand, idx) => (
                <img
                  key={`bottom-${idx}`}
                  src={brand.src}
                  alt={brand.alt}
                  className="w-12 sm:w-16 md:w-20 h-auto p-1 sm:p-2 mx-1 md:mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Invertorbrands;
