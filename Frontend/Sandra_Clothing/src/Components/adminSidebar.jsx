import React from "react";
import { FaPlus, FaEdit, FaTshirt } from "react-icons/fa";

const AdminSidebar = ({ onSelect }) => {
  const handleClick = (section) => {
    if (onSelect) {
      onSelect(section);
    }
  };

  return (
    <div className="w-64 h-screen p-6 space-y-6 text-white bg-[#3e2b1d]">
      <h2 className="mb-4 text-2xl font-bold">Admin Panel</h2>

      <div className="space-y-4">
        <button
          className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => handleClick("addProduct")}
        >
          <FaPlus />
          Add Product
        </button>

        <button
          className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => handleClick("editProduct")}
        >
          <FaEdit />
          Edit Product
        </button>

        <div className="mt-6">
          <h3 className="mb-2 text-sm text-gray-400 uppercase">Categories</h3>
          <ul className="space-y-2">
            {["Linen", "Dresses", "Tops", "Pants"].map((category) => (
              <li key={category}>
                <button
                  className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => handleClick(category.toLowerCase())}
                >
                  <FaTshirt />
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
