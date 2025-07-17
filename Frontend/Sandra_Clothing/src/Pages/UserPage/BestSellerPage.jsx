import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import product1 from "../../assets/linenfrock.jpg.webp";
import product2 from "../../assets/croptop.jpeg.webp";
import product3 from "../../assets/linenfrock.jpg.webp";
import product4 from "../../assets/product2.png";

const bestSellers = [
  {
    id: 1,
    name: "Linen Classic Dress",
    price: "Rs. 5,500",
    image: product4,
  },
  {
    id: 2,
    name: "Elegant Linen Dress",
    price: "Rs. 6,200",
    image: product1,
  },
  {
    id: 3,
    name: "Classic Crop Top",
    price: "Rs. 4,500",
    image: product2,
  },
  {
    id: 4,
    name: "Floral Skirt",
    price: "Rs. 5,000",
    image: product3,
  },
  {
    id: 5,
    name: "Cotton Wrap Dress",
    price: "Rs. 7,200",
    image: product2,
  },
  {
    id: 6,
    name: "Linen Classic Dress",
    price: "Rs. 5,500",
    image: product4,
  },
];

const BestSellerPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    if (item.name === "Linen Classic Dress") {
      navigate("/productpage");
    }
  };

  return (
    <>
      <NavBar />

      <div className="bg-[#F2E7D8] py-12 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-[#331D0C] text-center mb-10 tracking-wider">
          Our Best Sellers
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-lg tracking-wide text-center text-gray-700">
          Discover the most loved pieces from our collection. These styles are a
          favorite among our customers for their comfort, elegance, and timeless
          appeal.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden transition duration-300 bg-white rounded shadow-lg cursor-pointer hover:shadow-xl"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-64"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#331D0C] mb-1">
                  {item.name}
                </h3>
                <p className="font-medium text-gray-700">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BestSellerPage;
