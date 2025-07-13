import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import HeroPage from "./Pages/HomePage/HeroPage.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import NewArrivals from "./Pages/HomePage/NewArrivals.jsx";
import { Userhome } from "./Pages/Userhome.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userhome />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/hero" element={<HeroPage />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
