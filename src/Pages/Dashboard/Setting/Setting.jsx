import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const [username, setUsername] = useState("JohnDoe");

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
        
        {/* Profile Settings */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Profile Settings
          </h2>
          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Preferences
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Enable Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                  darkMode ? "translate-x-7" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
