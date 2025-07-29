import { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userType: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );
      console.log(res.data.message);
      alert(res.data.message);
    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
      alert(err.response?.data?.message || "Registration failed");
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
            SIGN UP
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* User Type */}
          <div className="mb-6">
            <label
              htmlFor="userType"
              className="block mb-2 text-sm font-semibold"
            >
              Register As
            </label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#331D0C] text-white py-2 font-semibold tracking-widest hover:bg-[#4b2f18] transition"
          >
            SIGN UP
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
