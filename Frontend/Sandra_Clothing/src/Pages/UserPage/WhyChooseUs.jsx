import { FaWater, FaAward, FaLeaf, FaTshirt } from "react-icons/fa";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <FaWater className="text-4xl text-[#A67B5B]" />,
    title: "Moisture-Wicking",
    description:
      "Stay dry and comfortable—our breathable fabrics draw sweat away from your body for all-day freshness.",
  },
  {
    icon: <FaLeaf className="text-4xl text-[#A67B5B]" />,
    title: "Eco-Friendly",
    description:
      "We promote sustainability with organic fabrics and recyclable packaging.",
  },
  {
    icon: <FaAward className="text-4xl text-[#A67B5B]" />,
    title: "Top Quality",
    description: "Our products meet the highest standards in quality.",
  },
  {
    icon: <FaTshirt className="text-4xl text-[#A67B5B]" />,
    title: "Color Retention",
    description:
      "Our fabrics maintain their rich color even after multiple washes, ensuring a lasting vibrant look.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 py-12 bg-[#F2E7D8]">
      <h2 className="mb-10 text-3xl font-bold text-center text-[#4B3621]">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 text-center transition duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
          >
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="mb-2 text-xl font-semibold text-[#4B3621]">
              {item.title}
            </h3>
            <p className="text-sm text-[#5C4B3B]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
