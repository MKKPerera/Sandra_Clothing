import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AdminSidebar from "../../Components/adminSidebar.jsx";

const data = [
  { category: "Linen", amount: 120 },
  { category: "Dresses", amount: 80 },
  { category: "Tops", amount: 150 },
  { category: "Pants", amount: 100 },
];

const AdminDashboard = () => {
  return (
    <div
      className="flex min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/src/assets/hero1.jpg')" }}
    >
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="mb-4 text-3xl font-bold text-white drop-shadow">
          Admin Dashboard
        </h2>
        <div className="w-full max-w-4xl p-4 mx-auto bg-white shadow-lg bg-opacity-90 rounded-xl h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#331D0C" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
