import { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
      alert(res.data.message);
      console.log(res.data.user);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <NavBar />

      <div className="py-12 flex items-center justify-center bg-[#E8DFD1] px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md px-8 py-10 bg-white shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center tracking-widest text-[#331D0C]">
            LOGIN
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold"
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
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <Link
              to="/forgetpassword"
              className="text-sm text-[#331D0C] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#331D0C] text-white py-2 font-semibold tracking-widest hover:bg-[#4a2b12] transition duration-300"
          >
            LOGIN
          </button>

          {/* Sign Up Link */}
          <p className="mt-6 text-sm tracking-wide text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#331D0C] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
