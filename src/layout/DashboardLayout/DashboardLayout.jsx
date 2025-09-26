import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Pages/Dashboard/SideBar/SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {/* Header */}
      <header className="bg-blue-950 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
          <h1 className="text-2xl font-semibold tracking-wide">Education</h1>
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium">Hello User</p>
            <img
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              src="https://i.ibb.co/W4hHDFfw/rounded-profile-image.png"
              alt="User"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 bg-gray-100">
        {/* Sidebar */}
        <SideBar />

        {/* Content Area */}
        <main className="flex-1 p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
