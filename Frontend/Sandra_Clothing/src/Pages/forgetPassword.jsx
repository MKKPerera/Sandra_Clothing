import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  const handleCancel = () => {
    setEmail("");
    navigate("/login");
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf5] text-[#331D0C]">
      <NavBar />

      <div className="flex items-center justify-center flex-grow px-4 py-16">
        <div className="w-full max-w-md bg-white p-8 shadow-md rounded-xl border border-[#ddd]">
          <h2 className="mb-4 text-2xl font-semibold text-center">
            Forgot Password
          </h2>
          <p className="mb-6 text-sm text-center">
            We will send you an email to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#331D0C]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-[#331D0C] text-white px-6 py-2 rounded hover:bg-[#5e2e12] transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-[#5e2e12] text-white px-6 py-2 rounded hover:bg-[#8a7662] transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgetPassword;
