import React from "react";

const Aboutus = () => {
  return (
    <div
      className="px-4 mt-6 mb-6 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('About-bg.jpg')`,
      }}
    >
      <div className="bg-white/90 mt-8 p-6 rounded-xl">
        {/* About Us Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-justify p-3 sm:p-5">
            <p>
              <strong className="underline">Konstructo Solar Energy</strong> is
              your one-stop solution for complete solar system installation. We
              provide all essential components under one roof, including
              high-quality solar panels, inverters, breakers, and durable
              stands—ensuring a hassle-free and efficient setup process.
              Whether you're installing a system for your home, office, or
              industry, everything you need is readily available at our office.
              Our professional team at Konstructo is highly skilled, well-
              trained, and dedicated to delivering top-notch service. From
              planning and designing to installation and after-sales support,
              our experts ensure a smooth, safe, and reliable solar energy
              experience tailored to your needs. To add more value, we also
              offer <strong>one year of free service</strong> after
              installation, giving you peace of mind and complete customer
              satisfaction.
            </p>
            <h2 className="text-xl font-semibold mt-4 bg-amber-300 w-max px-4 py-1 rounded-lg hover:bg-yellow-500 cursor-pointer mx-auto md:mx-0">
              About Us
            </h2>
          </div>
          <img
            src="About.jpg"
            alt="Konstructo Logo"
            className="w-full md:w-1/3 rounded-3xl h-auto p-4 shadow-2xl"
          />
        </div>

        {/* 12V Section */}
        <span className="text-2xl font-bold underline block mt-12">
          12V solar connection:–
        </span>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mt-6">
          <img
            src="12Vimg.jpg"
            alt="12V solar connection"
            className="w-full md:w-1/4 h-auto p-4 shadow-2xl rounded-2xl"
          />
          <p className="w-full md:w-1/2 text-justify">
            To connect a 12V solar system, start by placing the solar panel in a
            sunny, unobstructed location at an angle for maximum sunlight
            exposure. Next, connect the panel's positive and negative terminals
            to the corresponding solar input terminals on the charge controller.
            Then, connect the 12V battery to the charge controller—positive to
            positive and negative to negative—allowing the controller to detect
            the battery's voltage before the solar panel connection is
            completed. For powering AC devices, connect a 12V inverter to the
            battery. It’s also wise to use a circuit breaker between the
            battery and controller, and consider adding an MCB and surge
            protection for added safety. If you need more power, you can
            connect identical 12V panels or batteries in parallel. Always use
            proper wire sizes, and when disconnecting, remove the solar panel
            connection first to protect the controller.
          </p>
        </div>

        {/* 24V Section */}
        <span className="text-2xl font-bold underline block mt-12">
          24V solar connection:–
        </span>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mt-6">
          <p className="w-full md:w-1/2 text-justify">
            To connect a 24V solar system, start by placing the solar panels in
            a sunny, unobstructed location at an angle for maximum sunlight
            exposure. Use two identical 12V panels in series (or a single 24V
            panel) to achieve the required voltage. Next, connect the panels'
            positive and negative terminals to the corresponding solar input
            terminals on the 24V charge controller. Then, connect the 24V
            battery bank (made by connecting two identical 12V batteries in
            series) to the charge controller—positive to positive and negative
            to negative—allowing the controller to detect the battery voltage
            before completing the solar panel connection. For powering AC
            devices, connect a 24V inverter to the battery bank. It's also wise
            to use a circuit breaker between the battery and controller, and
            consider adding an MCB and surge protection for added safety. If
            you need more power, you can connect additional 24V panels or 24V
            battery banks in parallel. Always use appropriate wire sizes for
            the current being carried. When disconnecting the system, always
            remove the solar panel connection first to protect the charge
            controller.
          </p>
          <img
            src="24V.jpeg"
            alt="24V solar connection"
            className="w-full md:w-1/3 h-auto p-4 shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
