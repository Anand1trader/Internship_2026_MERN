import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/service"); // backend services API
        setServices(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Loading services...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6">Admin Services</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or description"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 w-full rounded-lg border"
      />

      {/* Services Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr
                key={service._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-2">{service.name}</td>
                <td className="px-4 py-2">{service.description}</td>
                <td className="px-4 py-2">₹{service.price}</td>
                <td className="px-4 py-2">{service.duration || "N/A"}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};