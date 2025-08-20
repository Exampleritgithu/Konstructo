import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  // WhatsApp link with pre-filled message
  const whatsappNumber = "923040510507"; // without + sign
  const whatsappMessage = "Hello! I want to know more about your solar services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-gray-300 border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative flex flex-col items-center">
              <Link to="/">
                <div className="flex flex-col items-center gap-2 mb-3">
                  <img
                    src="Logo.png"
                    alt="Navbar"
                    className="size-16 transform hover:scale-105 transition ease-in-out duration-500"
                  />
                  <h2
                    className="text-lg font-semibold text-center"
                    style={{ lineHeight: 0.9 }}
                  >
                    KONSTRUCTO <br />
                    <i className="text-sm not-italic font-medium text-yellow-400">
                      Soler Energy
                    </i>
                  </h2>
                </div>
              </Link>
              <p className="text-gray-300 text-sm max-w-xs">
                Konstructo solar energy provides top-notch solar energy solutions,
                ensuring efficient and sustainable energy management for a greener
                future.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start text-center ml-0 md:ml-10 xl:ml-24 md:text-left space-y-4">
            <h2 className="text-lg font-semibold text-yellow-400">Quick Links</h2>
            <Link
              to="/"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                isActive("/") ? "text-yellow-400" : ""
              }`}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                  isActive("/") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
            <Link
              to="/about-us"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                isActive("/about-us") ? "text-yellow-400" : ""
              }`}
            >
              About Us
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                  isActive("/about-us") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
            <Link
              to="/features"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                isActive("/features") ? "text-yellow-400" : ""
              }`}
            >
              Services
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                  isActive("/features") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
            <Link
              to="/Contact"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                isActive("/Contact") ? "text-yellow-400" : ""
              }`}
            >
              Contact Us
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                  isActive("/Contact") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
            {loggedIn && (
              <Link
                to="/dashboard"
                className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                  isActive("/dashboard") ? "text-yellow-400" : ""
                }`}
              >
                Dashboard
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                    isActive("/dashboard") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></span>
              </Link>
            )}
          </div>

          {/* Contact & Social Media Section */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center justify-center text-gray-300">
            <h2 className="text-lg font-semibold text-yellow-400">Contact Us</h2>
            <p className="text-sm">Email: Konstructosolarenergy@gmail.com</p>
            <p className="text-sm">Phone: +92-335-5400848</p>
            <p className="text-sm">Phone: +92-304-0510507</p>
            <p className="text-sm">Phone: +92-307-1515315</p>
            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555004818889"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
              >
                <FaTiktok className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Routing */}
<div className="py-3 text-center text-sm text-gray-300 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-center gap-4">
  <p>© {new Date().getFullYear()} Konstructo Solar Energy</p>

  {/* Footer Nav Links */}
  <div className="flex gap-4">
    <Link
      to="/"
      className={`hover:text-yellow-400 transition-colors ${isActive("/") ? "text-yellow-400" : ""}`}
    >
      Home
    </Link>
    <Link
      to="/about-us"
      className={`hover:text-yellow-400 transition-colors ${isActive("/about-us") ? "text-yellow-400" : ""}`}
    >
      About Us
    </Link>
    <Link
      to="/features"
      className={`hover:text-yellow-400 transition-colors ${isActive("/features") ? "text-yellow-400" : ""}`}
    >
      Services
    </Link>
    <Link
      to="/Contact"
      className={`hover:text-yellow-400 transition-colors ${isActive("/Contact") ? "text-yellow-400" : ""}`}
    >
      Contact
    </Link>
  </div>
</div>
      </footer>
    </>
  );
};

export default Footer;
