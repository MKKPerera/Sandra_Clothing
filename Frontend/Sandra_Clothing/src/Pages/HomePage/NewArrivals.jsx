import topImage from "../../assets/top.jpeg.webp";
import cropTopImage from "../../assets/croptop.jpeg.webp";

const newArrivals = [
  {
    id: 1,
    name: "Classic crop top",
    price: "Rs. 4,500",
    image: topImage,
  },
  {
    id: 2,
    name: "Classic crop top",
    price: "Rs. 4,500",
    image: topImage,
  },
  {
    id: 3,
    name: "Classic crop top",
    price: "Rs. 4,500",
    image: cropTopImage,
  },
  {
    id: 4,
    name: "Classic crop top",
    price: "Rs. 4,500",
    image: cropTopImage,
  },
];

const NewArrivals = () => {
  return (
    <div className="py-12 px-4 md:px-16 bg-[#E8DFD1]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#331D0C]">
        NEW ARRIVALS
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-[#F2E7D8] shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="border border-[#331D0C] text-[#331D0C] px-6 py-2 font-medium hover:bg-[#331D0C] hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
