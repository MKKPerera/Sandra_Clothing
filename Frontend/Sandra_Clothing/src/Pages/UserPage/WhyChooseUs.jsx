import React from "react";
import { FaShippingFast, FaLock, FaRecycle, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <FaShippingFast className="text-4xl text-indigo-600" />,
    title: "Fast Delivery",
    description: "We ensure quick delivery straight to your doorstep.",
  },
  {
    icon: <FaLock className="text-4xl text-indigo-600" />,
    title: "Secure Payments",
    description: "All transactions are protected with top-grade security.",
  },
  {
    icon: <FaRecycle className="text-4xl text-indigo-600" />,
    title: "Eco-Friendly",
    description: "We promote sustainability through recyclable packaging.",
  },
  {
    icon: <FaAward className="text-4xl text-indigo-600" />,
    title: "Top Quality",
    description: "Our products meet the highest standards in quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">
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
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-700">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
