import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTshirt } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 h-screen p-6 space-y-6 text-white bg-[#3e2b1d]">
      <h2 className="mb-4 text-2xl font-bold">Admin Panel</h2>

      <div className="space-y-4">
        <button
          className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => handleClick("/adminaddproducts")}
        >
          <FaPlus />
          Add Product
        </button>

        <button
          className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => handleClick("/admineditproducts")}
        >
          <FaEdit />
          Edit Product
        </button>

        <div className="mt-6">
          <h3 className="mb-2 text-sm text-gray-400 uppercase">Categories</h3>
          <ul className="space-y-2">
            {[
              { name: "Linen", path: "/linenpage" },
              { name: "Dresses", path: "/frockpage" },
              { name: "Tops", path: "/tshirtpage" },
              { name: "Pants", path: "/pantspage" },
            ].map((category) => (
              <li key={category.name}>
                <button
                  className="flex items-center w-full gap-3 px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => handleClick(category.path)}
                >
                  <FaTshirt />
                  {category.name}
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
