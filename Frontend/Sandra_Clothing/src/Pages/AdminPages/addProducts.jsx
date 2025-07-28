import { useState } from "react";

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    sizes: [],
    type: "",
    images: [],
    colors: [],
    details: "",
    description: {
      fabric: "",
      model: "",
    },
  });

  const sizesOptions = ["XS", "S", "M", "L", "XL"];
  const colorOptions = ["Red", "Black", "Blue", "White", "Green"];
  const productTypes = ["Dress", "Top", "Bottom", "Accessories"];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setProduct({ ...product, images: files });
  };

  const handleCheckboxChange = (e, key) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const current = product[key];
    const updated = checked
      ? [...current, value]
      : current.filter((item) => item !== value);
    setProduct({ ...product, [key]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", product);
  };

  return (
    <div className="min-h-screen bg-[#F2E7D8] py-10 px-4 font-sans">
      <div className="max-w-5xl p-10 mx-auto bg-white shadow-2xl rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-[#331D0C]">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-full p-3 border border-[#331D0C]/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#331D0C]"
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="w-full p-3 border border-[#331D0C]/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#331D0C]"
          />

          {/* Product Type */}
          <select
            value={product.type}
            onChange={(e) => setProduct({ ...product, type: e.target.value })}
            className="w-full p-3 border border-[#331D0C]/30 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#331D0C]"
          >
            <option value="">Select Product Type</option>
            {productTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          {/* Sizes */}
          <div>
            <label className="block mb-2 font-medium text-[#331D0C]">
              Available Sizes
            </label>
            <div className="flex flex-wrap gap-4">
              {sizesOptions.map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <input
                    type="checkbox"
                    value={size}
                    onChange={(e) => handleCheckboxChange(e, "sizes")}
                    className="accent-[#331D0C]"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <label className="block mb-2 font-medium text-[#331D0C]">
              Available Colors
            </label>
            <div className="flex flex-wrap gap-4">
              {colorOptions.map((color) => (
                <label
                  key={color}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <input
                    type="checkbox"
                    value={color}
                    onChange={(e) => handleCheckboxChange(e, "colors")}
                    className="accent-[#331D0C]"
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block mb-2 font-medium text-[#331D0C]">
              Upload Images (Max 4)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="block w-full text-sm text-[#331D0C] bg-white rounded-lg border border-[#331D0C]/30 shadow-sm cursor-pointer"
            />
          </div>

          {/* Product Details */}
          <textarea
            placeholder="Product Details"
            value={product.details}
            onChange={(e) =>
              setProduct({ ...product, details: e.target.value })
            }
            className="w-full h-32 p-3 border border-[#331D0C]/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#331D0C]"
          ></textarea>

          {/* Product Description Table */}
          <div className="mt-10">
            <h4 className="mb-4 text-xl font-semibold text-[#331D0C]">
              Product Description
            </h4>
            <table className="w-full text-sm border border-[#331D0C] bg-[#FFF9F4] rounded-md">
              <tbody>
                <tr className="border border-[#331D0C]">
                  <td className="px-4 py-3 font-semibold text-[#331D0C]">
                    Product Name
                  </td>
                  <td className="px-4 py-3">{product.name || "-"}</td>
                </tr>
                <tr className="border border-[#331D0C]">
                  <td className="px-4 py-3 font-semibold text-[#331D0C]">
                    Fabric
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      placeholder="Fabric"
                      value={product.description.fabric}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          description: {
                            ...product.description,
                            fabric: e.target.value,
                          },
                        })
                      }
                      className="w-full p-1 border border-gray-300 rounded"
                    />
                  </td>
                </tr>
                <tr className="border border-[#331D0C]">
                  <td className="px-4 py-3 font-semibold text-[#331D0C]">
                    Model Wears
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      placeholder="Model Size Info"
                      value={product.description.model}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          description: {
                            ...product.description,
                            model: e.target.value,
                          },
                        })
                      }
                      className="w-full p-1 border border-gray-300 rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            type="submit"
            className="px-8 py-3 mt-6 text-white bg-[#331D0C] rounded-lg shadow hover:bg-[#4a2a14] transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
