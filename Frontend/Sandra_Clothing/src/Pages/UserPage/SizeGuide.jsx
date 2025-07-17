import React from "react";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";

const SizeGuide = () => {
  return (
    <>
      <NavBar />

      <div className="bg-[#F2E7D8]  py-12 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center text-[#331D0C] mb-10 tracking-wide">
          Size Guide (UK)
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-center border border-[#331D0C]">
            <thead className="bg-[#fbf5ec]">
              <tr>
                <th className="py-3 px-4 border border-[#331D0C] text-[#331D0C]">
                  UK Size
                </th>
                <th className="py-3 px-4 border border-[#331D0C] text-[#331D0C]">
                  Chest (inches)
                </th>
                <th className="py-3 px-4 border border-[#331D0C] text-[#331D0C]">
                  Waist (inches)
                </th>
                <th className="py-3 px-4 border border-[#331D0C] text-[#331D0C]">
                  Hips (inches)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#331D0C]">
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">6</td>
                <td className="py-3 px-4 border border-[#331D0C]">30-31</td>
                <td className="py-3 px-4 border border-[#331D0C]">24-25</td>
                <td className="py-3 px-4 border border-[#331D0C]">33-34</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">8</td>
                <td className="py-3 px-4 border border-[#331D0C]">32-33</td>
                <td className="py-3 px-4 border border-[#331D0C]">26-27</td>
                <td className="py-3 px-4 border border-[#331D0C]">35-36</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">10</td>
                <td className="py-3 px-4 border border-[#331D0C]">34-35</td>
                <td className="py-3 px-4 border border-[#331D0C]">28-29</td>
                <td className="py-3 px-4 border border-[#331D0C]">37-38</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">12</td>
                <td className="py-3 px-4 border border-[#331D0C]">36-37</td>
                <td className="py-3 px-4 border border-[#331D0C]">30-31</td>
                <td className="py-3 px-4 border border-[#331D0C]">39-40</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">14</td>
                <td className="py-3 px-4 border border-[#331D0C]">38-39</td>
                <td className="py-3 px-4 border border-[#331D0C]">32-33</td>
                <td className="py-3 px-4 border border-[#331D0C]">41-42</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-[#331D0C]">16</td>
                <td className="py-3 px-4 border border-[#331D0C]">40-41</td>
                <td className="py-3 px-4 border border-[#331D0C]">34-35</td>
                <td className="py-3 px-4 border border-[#331D0C]">43-44</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SizeGuide;
