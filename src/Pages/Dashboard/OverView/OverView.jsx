import React from "react";
import { FaUsers, FaDollarSign, FaChartLine, FaShoppingCart } from "react-icons/fa";

const OverView = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 mt-2">
          Here’s what’s happening with your dashboard today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaUsers size={30} />
          <div>
            <p className="text-sm">Total Users</p>
            <h3 className="text-2xl font-bold">12,450</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaDollarSign size={30} />
          <div>
            <p className="text-sm">Revenue</p>
            <h3 className="text-2xl font-bold">$24,300</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaShoppingCart size={30} />
          <div>
            <p className="text-sm">New Orders</p>
            <h3 className="text-2xl font-bold">320</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <FaChartLine size={30} />
          <div>
            <p className="text-sm">Growth</p>
            <h3 className="text-2xl font-bold">+12%</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Purchased Premium Plan</td>
                <td className="px-4 py-2">Sep 25, 2025</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Updated Profile</td>
                <td className="px-4 py-2">Sep 24, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2">Alex Johnson</td>
                <td className="px-4 py-2">Added New Post</td>
                <td className="px-4 py-2">Sep 23, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverView;
