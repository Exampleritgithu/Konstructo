import React from "react";

const Services = () => {
  return (
    <div className="relative" id="services">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('Services-bg.jpg')" }}
      ></div>

      {/* Content (z-10 so it's above the background) */}
      <div className="relative z-10 bg-white/80 py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Service 1: Residential Solar Installation */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="home-solar.png"
              alt="Residential Installation"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4">
              Residential Solar Installation
            </h3>
            <p className="text-gray-600 flex-grow">
              Efficient and cost-effective solar panel installations for homes
              to reduce electricity bills.
            </p>
          </div>

          {/* Service 2: Commercial Solar Solutions */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="commercial-solar.png"
              alt="Commercial Solar"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4 ">
              Commercial Solar Solutions
            </h3>
            <p className="text-gray-600 flex-grow">
              Large-scale solar power systems for offices, industries, and
              businesses.
            </p>
          </div>

          {/* Service 3: Net Metering Setup */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="net-metering.png"
              alt="Net Metering"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4">
              Net Metering
            </h3>
            <p className="text-gray-600 flex-grow">
              Enable your solar system to return excess energy to the grid and
              earn credits.
            </p>
          </div>

          {/* Service 4: Solar Panel Cleaning & Maintenance */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="maintenance.png"
              alt="Maintenance"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4">
              System Maintenance
            </h3>
            <p className="text-gray-600 flex-grow">
              Professional cleaning, repair, and diagnostics to keep your system
              at peak performance.
            </p>
          </div>

          {/* Service 5: Battery Backup & Hybrid Systems */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="battery.png"
              alt="Battery Backup"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4">
              Battery Backup Systems
            </h3>
            <p className="text-gray-600 flex-grow">
              Store your solar energy in batteries for use during night or power
              outages.
            </p>
          </div>

          {/* Service 6: Solar Consultation & Survey */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col">
            <img
              src="consultation.png"
              alt="Consultation"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2 mt-4">
              Free Consultation & Survey
            </h3>
            <p className="text-gray-600 flex-grow">
              Site inspection, system recommendations, and ROI estimation by our
              experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
