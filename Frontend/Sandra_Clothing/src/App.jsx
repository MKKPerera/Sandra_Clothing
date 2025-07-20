import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./Pages/UserPage/HeroPage.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import NewArrivals from "./Pages/UserPage/NewArrivals.jsx";
import WhyChooseUs from "./Pages/UserPage/WhyChooseUs.jsx";
import BestSellerPage from "./Pages/UserPage/BestSellerPage.jsx";
import LinenPage from "./Pages/UserPage/LinenPage.jsx";
import Frocks from "./Pages/UserPage/Frocks.jsx";
import TshirtPage from "./Pages/UserPage/TshirtPage.jsx";
import PantsPage from "./Pages/UserPage/PantsPage.jsx";
import ProductPage from "./Pages/UserPage/ProductPage.jsx";
import ContactUsPage from "./Pages/UserPage/ContactUsPage.jsx";
import SizeGuide from "./Pages/UserPage/SizeGuide.jsx";
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
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/bestsellers" element={<BestSellerPage />} />
        <Route path="/linenpage" element={<LinenPage />} />
        <Route path="/frockpage" element={<Frocks />} />
        <Route path="/tshirtpage" element={<TshirtPage />} />
        <Route path="/pantspage" element={<PantsPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/sizeguide" element={<SizeGuide />} />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
