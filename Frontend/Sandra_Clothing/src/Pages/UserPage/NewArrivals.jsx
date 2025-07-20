import { useState } from "react";
import topImage from "../../assets/top.jpeg.webp";
import cropTopImage from "../../assets/croptop.jpeg.webp";
import dressImage from "../../assets/product2.png";
import dressImage2 from "../../assets/linenfrock.jpg.webp";
import { useNavigate } from "react-router-dom";

const allArrivals = [
  {
    id: 1,
    name: "Linen Classic Dress",
    price: "Rs. 5,500",
    image: dressImage,
    link: "/productpage",
  },
  {
    id: 2,
    name: "Classic crop top",
    price: "Rs. 4,500",
    image: topImage,
  },
  {
    id: 3,
    name: "Long dress",
    price: "Rs. 6,000",
    image: dressImage2,
  },
  {
    id: 4,
    name: "Classic crop top",
    price: "Rs. 3,500",
    image: cropTopImage,
  },
  {
    id: 5,
    name: "Summer Vibe Top",
    price: "Rs. 4,200",
    image: dressImage2,
  },
  {
    id: 6,
    name: "Boho Dress",
    price: "Rs. 6,800",
    image: dressImage2,
  },
  {
    id: 7,
    name: "Elegant Party Dress",
    price: "Rs. 7,300",
    image: dressImage2,
  },
  {
    id: 8,
    name: "Chic Casual Wear",
    price: "Rs. 3,800",
    image: dressImage2,
  },
];

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const displayedArrivals = showAll ? allArrivals : allArrivals.slice(0, 4);

  const handleCardClick = (item) => {
    if (item.link) {
      navigate(item.link);
    }
  };

  return (
    <div className="py-12 px-4 md:px-16 bg-[#E8DFD1]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#331D0C]">
        NEW ARRIVALS
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-[#F2E7D8] shadow-md hover:shadow-xl transition duration-300"
            onClick={() => handleCardClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="mt-1 text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button
          className="border border-[#331D0C] text-[#331D0C] px-6 py-2 font-medium hover:bg-[#331D0C] hover:text-white transition duration-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
