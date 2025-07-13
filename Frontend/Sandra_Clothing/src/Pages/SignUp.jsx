import { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", formData);
  };

  return (
    <>
      <NavBar />

      <div className="py-12 flex items-center justify-center bg-[#E8DFD1] px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md px-8 py-10 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center tracking-widest text-[#331D0C]">
            SIGN UP
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2 tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331D0C] tracking-wide"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-transparent border border-[#331D0C] text-[#331D0C] py-2 font-semibold tracking-widest hover:bg-[#331D0C] hover:text-white transition duration-300"
          >
            SIGN UP
          </button>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-6 tracking-wide">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#331D0C] font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
