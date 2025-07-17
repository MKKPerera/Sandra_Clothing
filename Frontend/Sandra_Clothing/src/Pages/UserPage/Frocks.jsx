import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import frockImage from "../../assets/frock.jpg";
import Dress from "../../assets/product2.png";

const Frocks = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    productType: "",
    size: "",
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Linen Classic Dress",
      price: "Rs. 5,500",
      priceValue: 4800,
      type: "casual",
      image: Dress,
    },
    {
      id: 2,
      name: "Casual Frock",
      price: "Rs. 3,900",
      priceValue: 3900,
      type: "casual",
      image: frockImage,
    },
    {
      id: 3,
      name: "Party Frock",
      price: "Rs. 6,200",
      priceValue: 6200,
      type: "party",
      image: frockImage,
    },
    {
      id: 4,
      name: "Classic Frock",
      price: "Rs. 5,000",
      priceValue: 5000,
      type: "casual",
      image: frockImage,
    },
    {
      id: 5,
      name: "Summer Frock",
      price: "Rs. 3,500",
      priceValue: 3500,
      type: "casual",
      image: frockImage,
    },
    {
      id: 6,
      name: "Linen Classic Dress",
      price: "Rs. 5,500",
      priceValue: 5500,
      type: "party",
      image: frockImage,
    },
  ];

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCardClick = (item) => {
    if (item.name === "Linen Classic Dress") {
      navigate("/productpage");
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchType = filters.productType
      ? product.type === filters.productType
      : true;
    const matchPrice =
      filters.price === "low"
        ? product.priceValue < 4000
        : filters.price === "mid"
        ? product.priceValue >= 4000 && product.priceValue <= 5000
        : filters.price === "high"
        ? product.priceValue > 5000
        : true;

    return matchType && matchPrice;
  });

  return (
    <>
      <NavBar />

      <div className="bg-[#F2E7D8] py-8 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-[#331D0C] mb-6 text-center tracking-wide">
          Explore Frocks Collection
        </h2>

        <div className="flex flex-col justify-center gap-6 mb-10 md:flex-row">
          <select
            name="productType"
            value={filters.productType}
            onChange={handleFilterChange}
            className="px-4 py-2 tracking-wide border border-gray-400 bg-transparent text-[#331D0C] rounded"
          >
            <option value="">Product Type</option>
            <option value="casual">Casual Frock</option>
            <option value="party">Party Frock</option>
          </select>

          <select
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className="px-4 py-2 tracking-wide border border-gray-400 bg-transparent text-[#331D0C] rounded"
          >
            <option value="">Price</option>
            <option value="low">Below Rs. 4,000</option>
            <option value="mid">Rs. 4,000 - Rs. 5,000</option>
            <option value="high">Above Rs. 5,000</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="p-4 transition bg-white shadow cursor-pointer hover:shadow-xl"
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full mb-4 h-60"
                />
                <h3 className="text-lg font-semibold text-[#331D0C] tracking-wide">
                  {item.name}
                </h3>
                <p className="mt-1 tracking-wide text-gray-700">{item.price}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-600">
              No products match the selected filters.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Frocks;
