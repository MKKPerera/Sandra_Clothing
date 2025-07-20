import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import pants1 from "../../assets/cargo pants.webp";
import pants2 from "../../assets/linenpant.jpg";
import pants3 from "../../assets/harem pant.jpg";
import pants4 from "../../assets/wideleg.jpg";
import pant5 from "../../assets/Linen .webp";
import pant6 from "../../assets/Harem Pant2.avif";

const PantsPage = () => {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
  });

  const pantsProducts = [
    {
      id: 1,
      name: "Cargo Pant",
      price: "Rs. 4,200",
      priceValue: 4200,
      type: "cargo",
      image: pants1,
    },
    {
      id: 2,
      name: "Harem Pant",
      price: "Rs. 5,100",
      priceValue: 5100,
      type: "harem",
      image: pants3,
    },
    {
      id: 3,
      name: "Linen Pant",
      price: "Rs. 3,850",
      priceValue: 3850,
      type: "linen",
      image: pants2,
    },
    {
      id: 4,
      name: "Linen Wide Leg Pant",
      price: "Rs. 5,500",
      priceValue: 5500,
      type: "wide",
      image: pants4,
    },
    {
      id: 5,
      name: "Linen  Pant",
      price: "Rs. 3,500",
      priceValue: 3500,
      type: "wide",
      image: pant5,
    },
    {
      id: 6,
      name: "Harem Baggy Pant",
      price: "Rs. 7,100",
      priceValue: 7100,
      type: "harem",
      image: pant6,
    },
  ];

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const filteredProducts = pantsProducts.filter((product) => {
    const matchType = filters.type ? product.type === filters.type : true;
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

      <div className="bg-[#F2E7D8] py-10 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center text-[#331D0C] mb-8 tracking-wide">
          Explore Pants Collection
        </h2>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-10 md:flex-row md:justify-center">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-400 bg-transparent text-[#331D0C] rounded tracking-wide"
          >
            <option value="">Pant Type</option>
            <option value="cargo">Cargo</option>
            <option value="linen">Linen</option>
            <option value="harem">Harem</option>
            <option value="wide">Wide Leg</option>
          </select>

          <select
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-400 bg-transparent text-[#331D0C] rounded tracking-wide"
          >
            <option value="">Price</option>
            <option value="low">Below Rs. 4,000</option>
            <option value="mid">Rs. 4,000 - Rs. 5,000</option>
            <option value="high">Above Rs. 5,000</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 transition bg-white rounded-lg shadow hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full mb-4 rounded h-60"
                />
                <h3 className="text-xl font-semibold text-[#331D0C] tracking-wide">
                  {product.name}
                </h3>
                <p className="mt-1 font-medium text-gray-700">
                  {product.price}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-600">
              No pants found matching the selected filters.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PantsPage;
