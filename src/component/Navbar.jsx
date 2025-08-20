import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID", // from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // from EmailJS dashboard
        formData,
        "YOUR_USER_ID" // from EmailJS dashboard
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setShowForm(false);
          setFormData({ name: "", phone: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center px-6 h-16 ${
          scrolled
            ? "bg-blue-950 bg-opacity-80 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="Logo.png" alt="Logo" className="w-16 h-14" />
          <div className="leading-tight">
            <h2 className="text-yellow-300 text-lg font-bold">KONSTRUCTO</h2>
            <h2 className="text-white text-sm font-bold">Solar Energy</h2>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 text-white font-semibold ml-auto mr-10">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/About" },
            { name: "Services", path: "/Services" },
            { name: "Discover Konstructo", path: "/Discover" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-1 rounded-full hover:bg-gray-300 hover:text-black cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <button
          onClick={() => setShowForm(true)}
          className="hidden md:block bg-yellow-500 text-blue-950 font-semibold px-4 py-2 rounded-full hover:bg-yellow-700"
        >
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto md:hidden flex flex-col gap-1.5 w-7 h-6 justify-center cursor-pointer z-50"
        >
          <span
            className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-blue-800 bg-opacity-95 shadow-lg backdrop-blur-md z-40 flex flex-col pt-20 px-6"
      >
        {["Home", "About Us", "Services", "Discover Konstructo"].map((item) => (
          <h2
            key={item}
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl font-semibold py-3 border-b border-yellow-500 cursor-pointer hover:bg-yellow-500 hover:text-black rounded"
          >
            {item}
          </h2>
        ))}
        <button
          onClick={() => {
            setMenuOpen(false);
            setShowForm(true);
          }}
          className="mt-auto bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-700"
        >
          Contact Us
        </button>
      </motion.div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-yellow-400 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mb-3"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mb-3"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
