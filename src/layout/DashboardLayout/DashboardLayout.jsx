import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='bg-green-400 poppins '>
            <div className='container flex justify-between items-center py-3 px-10 mx-auto '>
                <h1 className='text-xl font-medium text-gray-700'>Dashboard</h1>
                <span className='flex items-center gap-4'>
                    <p className='text-xl font-medium text-gray-700'>Hello User</p>
                    <img className='w-12' src="https://i.ibb.co.com/W4hHDFfw/rounded-profile-image.png" alt="image" /> 
                    </span>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;