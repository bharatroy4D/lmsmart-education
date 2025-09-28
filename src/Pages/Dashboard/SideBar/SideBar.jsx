import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaUsers, FaUserCircle, FaCog } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const menuItems = [
  { name: "Overview", path: "overview", icon: <CiGrid41 size={22} /> },
  { name: "Users", path: "user", icon: <FaUsers size={22} /> },
  { name: "Profile", path: "profile", icon: <FaUserCircle size={22} /> },
  { name: "Settings", path: "setting", icon: <FaCog size={22} /> },
];

const SideBar = () => {
  const location = useLocation();
  const { Logout } = useAuth();
  const navigate = useNavigate()
  const handleLogout = async () => {
    await Logout()
    navigate("/")
  }

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 h-screen w-60 flex flex-col shadow-xl">
      {/* Logo / Title */}
      <div className="text-center py-6 border-b border-blue-800">
        <h1 className="text-white text-2xl font-bold tracking-wider">Dashboard</h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-6 px-3 gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 
                ${isActive
                  ? "bg-blue-700 text-white shadow-lg"
                  : "text-gray-300 hover:bg-blue-800 hover:text-white"
                }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-gray-300 hover:bg-red-600 hover:text-white mt-4"
        >
          <FaUserCircle size={22} /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
