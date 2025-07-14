import { useState } from "react";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import Tshirt from "../../assets/tshirt.jpg";

const TshirtPage = () => {
  const [filters, setFilters] = useState({
    productType: "",
    size: "",
    price: "",
  });

  // Updated products with 'type' and 'priceValue' fields
  const products = [
    {
      id: 1,
      name: "Tshirt",
      price: "Rs. 4,500",
      priceValue: 4500,
      type: "tshirt",
      image: Tshirt,
    },
    {
      id: 2,
      name: "Crop Tshirt",
      price: "Rs. 2,500",
      priceValue: 2500,
      type: "croptshirt",
      image: Tshirt,
    },
    {
      id: 3,
      name: "Crop Tshirt",
      price: "Rs. 6,500",
      priceValue: 6500,
      type: "croptshirt",
      image: Tshirt,
    },
    {
      id: 4,
      name: "Tshirt",
      price: "Rs. 4,500",
      priceValue: 4500,
      type: "tshirt",
      image: Tshirt,
    },
    {
      id: 5,
      name: "Check Tshirt",
      price: "Rs. 7,500",
      priceValue: 7500,
      type: "checktshirt",
      image: Tshirt,
    },
  ];

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchType =
      filters.productType !== "" ? product.type === filters.productType : true;

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

      {/* Filter Section */}
      <div className="bg-[#F2E7D8] py-8 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-[#331D0C] mb-6 text-center tracking-wide">
          Explore T-Shirt Collection
        </h2>

        <div className="flex flex-col justify-center gap-6 mb-10 md:flex-row">
          {/* Product Type Filter */}
          <select
            name="productType"
            value={filters.productType}
            onChange={handleFilterChange}
            className="px-4 py-2 tracking-wide border border-gray-400 bg-transparent text-[#331D0C] rounded"
          >
            <option value="">Product Type</option>
            <option value="tshirt">Tshirt</option>
            <option value="croptshirt">Crop Tshirt</option>
            <option value="checktshirt">Check Tshirt</option>
          </select>

          {/* Size Filter (not used in filtering logic yet)
          <select
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
            className="px-4 py-2 tracking-wide border border-gray-400 bg-transparent text-[#331D0C] rounded"
          >
            <option value="">Size</option>
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
          </select> */}

          {/* Price Filter */}
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="p-4 transition bg-white shadow hover:shadow-xl"
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

export default TshirtPage;
