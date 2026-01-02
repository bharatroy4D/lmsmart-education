import React, { useState } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className='flex justify-between items-center py-2 lg:py-3  container px-4 lg:px-10 mx-auto'>
                <img className='w-36 lg:w-44 lg:pr-8 ' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="" />

                <div>
                    <div className='flex items-center'>
                        {/* Desktop Links */}
                        <div className='hidden lg:inline-flex gap-7 poppins font-semibold text-gray-800'>
                            <Link to={"/"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Home</Link>
                            <Link to={"/course"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Course</Link>
                            <Link to={"/blog"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Blog</Link>
                            <Link to={"/pages"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Pages</Link>
                            <Link to={"/dashboardLayout"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Dashboard</Link>
                        </div>

                        {/* search bar */}
                        <div className='hidden lg:inline-flex border border-gray-400 rounded-2xl text-gray-700 py-1 px-3 ml-10 '>
                            <input className='outline-none' type="text" placeholder='Search' />
                            <CiSearch className='text-xl' />
                        </div>

                        {/* Icons */}
                        <MdOutlineShoppingCart className='text-2xl text-gray-600 mx-7' />
                        <div className='hidden lg:inline-flex items-center text-gray-600 poppins font-semibold border-l border-gray-700 pl-10 gap-2'>
                            <CiUser className='mr-1'/>
                            <Link to={"/login"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Login</Link>/
                            <Link to={"/register"} className="px-2 py-1 rounded hover:bg-gray-200 transition">Register</Link>
                        </div>

                        {/* mobile device */}
                        <div className='md:hidden'>
                            <RxHamburgerMenu onClick={() => setOpen(!open)}
                                className='text-2xl text-gray-600' />
                        </div>

                        {/* Mobile Menu */}
                        <div className={`fixed md:hidden top-0 right-0 poppins p-3 w-44 h-screen z-60 bg-white shadow-md rounded transform transition duration-300
                            ${open ? ' translate-x-0' : 'translate-x-full'}`} >
                            <div className='flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-5'>
                                <h1 className='text-lg text-gray-600 font-medium'>Menu</h1>
                                <IoMdClose onClick={() => setOpen(!open)} className='text-xl text-black' />
                            </div>
                            {open && (
                                <div className='flex flex-col gap-5 text-gray-700 '>
                                    <Link to={"/"} className="px-2 py-1 rounded hover:bg-gray-200 transition" onClick={() => setOpen(false)}>Home</Link>
                                    <Link to={"/course"} className="px-2 py-1 rounded hover:bg-gray-200 transition" onClick={() => setOpen(false)}>Course</Link>
                                    <Link to={"/blog"} className="px-2 py-1 rounded hover:bg-gray-200 transition" onClick={() => setOpen(false)}>Blog</Link>
                                    <Link to={"/pages"} className="px-2 py-1 rounded hover:bg-gray-200 transition" onClick={() => setOpen(false)}>Pages</Link>
                                </div>
                            )}
                        </div>

                        {/* backdrop */}
                        {open && (
                            <div className='fixed inset-0 bg-black opacity-20 z-40'
                                onClick={() => setOpen(!open)}
                            >
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
