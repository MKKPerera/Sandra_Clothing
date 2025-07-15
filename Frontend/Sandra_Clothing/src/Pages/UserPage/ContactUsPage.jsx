import React, { useState } from "react";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending message:", formData);
  };

  return (
    <>
      <NavBar />

      <div className="bg-[#F2E7D8] py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#331D0C] text-center mb-10 tracking-wide">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left - Map */}
          <div className="w-full h-96">
            <iframe
              title="Genemulla Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63332.41544342108!2d79.96104074999999!3d7.07813885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e94605b93727%3A0xf1b8b5f82b1d7b93!2sGanemulla!5e0!3m2!1sen!2slk!4v1710245123456!5m2!1sen!2slk"
              className="w-full h-full border-0 rounded shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-semibold tracking-wide text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold tracking-wide text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold tracking-wide text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent border border-[#331D0C] text-[#331D0C] py-2 font-semibold tracking-widest hover:bg-[#331D0C] hover:text-white transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUsPage;
