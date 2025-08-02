// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroPage from "./Pages/UserPage/HeroPage.jsx";
// import Login from "./Pages/Login.jsx";
// import SignUp from "./Pages/SignUp.jsx";
// import ForgetPassword from "./Pages/ForgetPassword.jsx";
// import NewArrivals from "./Pages/UserPage/NewArrivals.jsx";
// import WhyChooseUs from "./Pages/UserPage/WhyChooseUs.jsx";
// import BestSellerPage from "./Pages/UserPage/BestSellerPage.jsx";
// import LinenPage from "./Pages/UserPage/LinenPage.jsx";
// import Frocks from "./Pages/UserPage/Frocks.jsx";
// import TshirtPage from "./Pages/UserPage/TshirtPage.jsx";
// import PantsPage from "./Pages/UserPage/PantsPage.jsx";
// import ProductPage from "./Pages/UserPage/ProductPage.jsx";
// import ContactUsPage from "./Pages/UserPage/ContactUsPage.jsx";
// import SizeGuide from "./Pages/UserPage/SizeGuide.jsx";
// import AddProducts from "./Pages/AdminPages/addProducts.jsx";
// import AdminDashboard from "./Pages/AdminPages/adminDashboard.jsx";
// import { Userhome } from "./Pages/Userhome.jsx";
// import Footer from "./Components/Footer.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Userhome />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgetpassword" element={<ForgetPassword />} />

//         <Route path="/hero" element={<HeroPage />} />
//         <Route path="/newarrivals" element={<NewArrivals />} />
//         <Route path="/whychooseus" element={<WhyChooseUs />} />
//         <Route path="/bestsellers" element={<BestSellerPage />} />
//         <Route path="/linenpage" element={<LinenPage />} />
//         <Route path="/frockpage" element={<Frocks />} />
//         <Route path="/tshirtpage" element={<TshirtPage />} />
//         <Route path="/pantspage" element={<PantsPage />} />
//         <Route path="/productpage" element={<ProductPage />} />
//         <Route path="/contactus" element={<ContactUsPage />} />
//         <Route path="/sizeguide" element={<SizeGuide />} />

//         <Route path="/adminaddproducts" element={<AddProducts />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />

//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./Pages/UserPage/HeroPage.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
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
import AddProducts from "./Pages/AdminPages/addProducts.jsx";
import AdminDashboard from "./Pages/AdminPages/adminDashboard.jsx";
import { Userhome } from "./Pages/Userhome.jsx";
import Footer from "./Components/Footer.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Userhome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          {/* Private routes */}
          <Route
            path="/hero"
            element={
              <PrivateRoute>
                <HeroPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/newarrivals"
            element={
              <PrivateRoute>
                <NewArrivals />
              </PrivateRoute>
            }
          />
          <Route
            path="/whychooseus"
            element={
              <PrivateRoute>
                <WhyChooseUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/bestsellers"
            element={
              <PrivateRoute>
                <BestSellerPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/linenpage"
            element={
              <PrivateRoute>
                <LinenPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/frockpage"
            element={
              <PrivateRoute>
                <Frocks />
              </PrivateRoute>
            }
          />
          <Route
            path="/tshirtpage"
            element={
              <PrivateRoute>
                <TshirtPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/pantspage"
            element={
              <PrivateRoute>
                <PantsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/productpage"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contactus"
            element={
              <PrivateRoute>
                <ContactUsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/sizeguide"
            element={
              <PrivateRoute>
                <SizeGuide />
              </PrivateRoute>
            }
          />
          <Route
            path="/adminaddproducts"
            element={
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/footer"
            element={
              <PrivateRoute>
                <Footer />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
