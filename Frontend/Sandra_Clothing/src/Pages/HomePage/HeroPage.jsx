import React, { useState, useEffect } from "react";
import heroImage1 from "../../assets/hero1.jpg";
import heroImage2 from "../../assets/hero2.jpg.avif";

const HeroPage = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [heroImage1, heroImage2];

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NEW NEUTRALS</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Explore our new collection of fashion essentials crafted with comfort
          and elegance in mind.
        </p>
        <button className="bg-transparent border border-white text-white px-8 py-2 font-semibold hover:bg-white hover:text-black transition duration-300">
          Shop Now
        </button>

        {/* Manual control buttons */}
        <div className="flex mt-10 space-x-3">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentBg === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Background ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
