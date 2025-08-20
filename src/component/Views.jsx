import React from 'react';
import { FaGlobe, FaMousePointer, FaDownload, FaChartLine } from 'react-icons/fa';

const Views = () => {
  // Data with associated icons
  const stats = [
    { value: '35,000+', label: 'Website Views', icon: <FaGlobe size={28} className="text-yellow-400" /> },
    { value: '5,500+', label: 'On Click', icon: <FaMousePointer size={28} className="text-yellow-400" /> },
    { value: '540+', label: 'Installed Project', icon: <FaDownload size={28} className="text-yellow-400" /> },
    { value: '95%+', label: 'Profitable', icon: <FaChartLine size={28} className="text-yellow-400" /> },
  ];

  return (
    <div className="mt-44 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs sm:w-60 h-40 bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] 
                       transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col justify-center items-center border border-white/20"
          >
            <div className="mb-2">{item.icon}</div>
            <h2 className="text-yellow-400 text-3xl font-bold">{item.value}</h2>
            <p className="text-sm text-black mt-1 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Views;
