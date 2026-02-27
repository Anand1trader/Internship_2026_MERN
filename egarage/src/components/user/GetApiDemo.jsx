import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GetApiDemo = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/users?limit=50"
      );
      setUsers(res.data.users);
      toast.success("Users Loaded Successfully 🚀");
    } catch (err) {
      toast.error("Failed to fetch users ❌");
    }
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
    toast.success("User deleted successfully 🗑️");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Users Management (Auto Sequence ID)
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-center">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">Sr No</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Age</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* 🔥 Yaha change kiya */}
                    <td className="p-3 font-semibold">
                      {index + 1}
                    </td>

                    <td className="p-3">{user.firstName}</td>
                    <td className="p-3">{user.lastName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.age}</td>

                    <td className="p-3">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-5 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};