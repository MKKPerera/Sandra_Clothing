import React, { useState } from "react";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import productImg1 from "../../assets/product1.png";
import productImg2 from "../../assets/product2.png";
import productImg3 from "../../assets/product3.png";
import productImg4 from "../../assets/product4.png";

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(productImg1);
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#D7CCC8", "#66785E", "#6D4C41"];

  return (
    <>
      <NavBar />

      <div className="bg-[#F2E7D8] py-10 px-4 md:px-20">
        <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto rounded shadow-md"
            />
            <div className="flex gap-4 mt-4">
              {[productImg1, productImg2, productImg3, productImg4].map(
                (img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Product ${i + 1}`}
                    onClick={() => setMainImage(img)}
                    className="w-20 h-20 object-cover border border-gray-300 cursor-pointer hover:border-[#331D0C]"
                  />
                )
              )}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="text-[#331D0C]">
            <h2 className="mb-4 text-3xl font-bold tracking-wide">
              Linen Classic Dress
            </h2>
            <p className="mb-6 text-xl font-semibold">Rs. 5,500</p>

            {/* Sizes */}
            <div className="mb-6">
              <h4 className="mb-2 font-semibold tracking-wide">
                Available Sizes
              </h4>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-[#331D0C] text-[#331D0C] hover:bg-[#331D0C] hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h4 className="mb-2 font-semibold tracking-wide">
                Available Colors
              </h4>
              <div className="flex gap-3">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 transition border border-gray-400 rounded-full cursor-pointer hover:scale-110"
                  ></div>
                ))}
              </div>
            </div>

            {/* Description Table */}
            <div className="mt-10">
              <h4 className="mb-4 text-lg font-semibold tracking-wide">
                Product Description
              </h4>
              <table className="w-full border border-[#331D0C] text-sm">
                <tbody>
                  <tr className="border border-[#331D0C]">
                    <td className="px-4 py-2 font-semibold">Product Name</td>
                    <td className="px-4 py-2">Linen Classic Dress</td>
                  </tr>
                  <tr className="border border-[#331D0C]">
                    <td className="px-4 py-2 font-semibold">Fabric</td>
                    <td className="px-4 py-2">100% Premium Linen</td>
                  </tr>
                  <tr className="border border-[#331D0C]">
                    <td className="px-4 py-2 font-semibold">Model Wears</td>
                    <td className="px-4 py-2">Size M / Height: 5'7"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
