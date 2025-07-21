import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import linenImg1 from "../../assets/linenfrock.jpg.webp";
import linendress from "../../assets/product2.png";
import linenskirt from "../../assets/linen skirt.jpg";
import linenskirt2 from "../../assets/midi skirt.webp";
import linentop from "../../assets/linentop.webp";
import linentop2 from "../../assets/printed linentop.webp";
import linenpant from "../../assets/linenpant.webp";

const LinenPage = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    productType: "",
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Linen Classic Dress",
      price: "Rs. 5,500",
      priceValue: 5500,
      type: "frock",
      image: linendress,
      link: "/productpage",
    },
    {
      id: 8,
      name: "Short sleeve Linen Top",
      price: "Rs. 4,500",
      priceValue: 4500,
      type: "top",
      image: linentop,
    },
    {
      id: 2,
      name: "Linen Skirt",
      price: "Rs. 4,500",
      priceValue: 4500,
      type: "skirt",
      image: linenskirt,
    },
    {
      id: 3,
      name: "Linen Frock",
      price: "Rs. 6,000",
      priceValue: 6000,
      type: "frock",
      image: linenImg1,
    },
    {
      id: 4,
      name: "Linen Top",
      price: "Rs. 3,800",
      priceValue: 3800,
      type: "top",
      image: linentop2,
    },
    {
      id: 5,
      name: "Linen Midi Skirt",
      price: "Rs. 5,200",
      priceValue: 5200,
      type: "skirt",
      image: linenskirt2,
    },
    {
      id: 6,
      name: "Linen Wide Leg Pant",
      price: "Rs. 6,800",
      priceValue: 6800,
      type: "pant",
      image: linenpant,
    },
    {
      id: 7,
      name: "Linen Frock",
      price: "Rs. 4,200",
      priceValue: 4200,
      type: "frock",
      image: linenImg1,
    },
  ];

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCardClick = (item) => {
    if (item.link) {
      navigate(item.link);
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
          Explore Linen Collection
        </h2>

        {/* Filters */}
        <div className="flex flex-col justify-center gap-6 mb-10 md:flex-row">
          <select
            name="productType"
            value={filters.productType}
            onChange={handleFilterChange}
            className="px-4 py-2 tracking-wide border border-gray-400 bg-transparent text-[#331D0C] rounded"
          >
            <option value="">Product Type</option>
            <option value="top">Top</option>
            <option value="skirt">Skirt</option>
            <option value="frock">Dress</option>
            <option value="pant">Pants</option>
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

        {/* Products */}
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
              No products found matching the selected filters.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LinenPage;
