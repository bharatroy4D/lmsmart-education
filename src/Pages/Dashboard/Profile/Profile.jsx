import React from "react";
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    phone: "+1 234 567 890",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-blue-600 font-medium">{user.role}</p>
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <FaEnvelope /> {user.email}
          </p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Profile Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <p className="flex items-center gap-2">
            <FaUser className="text-blue-600" /> {user.name}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" /> {user.email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-blue-600" /> {user.phone}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> {user.location}
          </p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Edit Profile
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
