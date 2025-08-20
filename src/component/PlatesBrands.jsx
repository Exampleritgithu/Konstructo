import Marquee from "react-fast-marquee";

const brandImages = [
  { src: "longi.png", alt: "Longi" },
  { src: "Astro.png", alt: "Astro" },
  { src: "jinko.png", alt: "Jinko" },
  { src: "ja.png", alt: "JA Solar" },
  { src: "candian.png", alt: "Canadian Solar" },
  { src: "tw.png", alt: "TW Solar" },
  { src: "dot.avif", alt: "Dot" },
  { src: "trina.png", alt: "Trina Solar" },
];

const PlatesBrands = () => {
  return (
    <main className="relative font-poppins bg-gradient-to-br from-[#ffb800] via-[#ff9800] to-[#ffb800] min-h-screen flex flex-col justify-center items-center py-12 px-4 md:px-8">
      {/* Shapes */}
      <div className="h-6 w-16 md:h-14 md:w-40 bg-green-600 rounded-tr-full rounded-br-full absolute left-0 bottom-2 z-10 shadow-xl"></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-6 left-8 md:bottom-12 md:left-24 shadow-xl z-10"></div>
      <div className="h-6 w-16 md:h-14 md:w-40 bg-[#1C204B] rounded-tl-full rounded-bl-full absolute right-0 top-3 z-10 shadow-xl"></div>
      <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 md:right-24 shadow-xl z-10"></div>

      {/* Content */}
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center text-center w-full max-w-7xl z-10">
        <div className="flex flex-col gap-3 max-w-4xl px-2 md:px-4">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl uppercase font-bold font-funnel tracking-wider">
            Our Solar Panel Brands
          </h1>
          <h2 className="text-white drop-shadow-md font-krona text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto">
            Our Solar solution uses advanced technologies for a scalable platform
          </h2>
        </div>

        {/* Marquees */}
        <div className="relative w-full max-w-6xl flex flex-col items-center px-2 md:px-0">
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
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 p-1 md:p-2 border-2 border-white rounded-2xl transition-transform hover:scale-110"
                />
              ))}
            </div>
          </Marquee>

          {/* Overlay Logo */}
          <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
            <div className="border border-solid rounded-full bg-white border-white shadow-lg p-3">
              <img src="Logo.png" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" alt="Overlay" />
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
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 p-1 md:p-2 border-2 border-white rounded-2xl transition-transform hover:scale-110"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default PlatesBrands;
