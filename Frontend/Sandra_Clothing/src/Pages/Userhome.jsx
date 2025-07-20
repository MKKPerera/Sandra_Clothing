import { useRef } from "react";
import HeroPage from "../Pages/UserPage/HeroPage.jsx";
import NavBar from "../Components/NavBar.jsx";
import NewArrivals from "../Pages/UserPage/NewArrivals.jsx";
import WhyChooseUs from "../Pages/UserPage/WhyChooseUs.jsx";
import Footer from "../Components/Footer.jsx";

export const Userhome = () => {
  const darkStyle = {
    backgroundColor: "#1a202c",
    color: "white",
    minHeight: "100vh",
  };

  // Create refs for each section
  const heroRef = useRef(null);

  // Function to scroll to a given section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Invalid ref for scroll");
    }
  };

  return (
    <div style={darkStyle}>
      {/* Navbar with scroll control */}
      <NavBar scrollToSection={scrollToSection} refs={{ heroRef }} />

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroPage />
        <NewArrivals />
        <WhyChooseUs />
        <Footer />
      </div>
    </div>
  );
};
