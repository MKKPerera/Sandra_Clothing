import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import footerImage from "../assets/footer.jpg.avif";

const Footer = () => {
  return (
    <footer className="bg-[#E2D5C2] text-[#331D0C] px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Size Guide</li>
          </ul>
        </div>

        {/* Find a Store */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Find a Store
          </h3>
          <p className="text-sm mb-1">
            <span className="font-medium">Address:</span> 6A, Kaluwala Road,
            Ganemulla.
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Phone:</span> +94 710 456 438
          </p>
          <p className="text-sm">
            <span className="font-medium">Open:</span> 9AM - 5PM
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Sign up to stay in the loop. Receive updates, access to exclusive
            deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-[#a08e80]  focus:outline-none focus:ring-2 focus:ring-[#331D0C] w-full"
            />
            <button
              type="submit"
              className="bg-transparent border border-[#331D0C] text-#331D0C px-4 py-2  hover:bg-[#a08e80] transition duration-300 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social + Image */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold tracking-wide">Be in Touch</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaInstagram />
            </a>
          </div>
          <img
            src={footerImage}
            alt="Footer"
            className="mt-4 w-full h-32 object-cover rounded-md"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-[#756355]">
        © {new Date().getFullYear()} Sandra Clothing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
