import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-blue-200'>
            <div className='flex justify-between items-center py-2 lg:py-3  max-w-11/12 mx-auto'>
                <img className='w-32 lg:w-36' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="" />

                <div>
                    <div className='flex items-center'>
                        <div className='hidden lg:inline-flex gap-7 text-gray-700 '>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/course"}>Course</Link>
                            <Link to={"/blog"}>Blog</Link>
                            <Link to={"/pages"}>Pages</Link>
                        </div>
                        {/* search bar */}
                        <div className='hidden lg:inline-flex border border-gray-400 rounded-2xl text-gray-700 py-1 px-3 ml-10 '>
                            <input className='outline-none' type="text" name="" id="" placeholder='Search' />
                            <CiSearch className='text-xl' />
                        </div>
                        <MdOutlineShoppingCart className='text-2xl text-gray-600 mx-7' />
                        <div className='hidden lg:block text-gray-600 border-l border-gray-700 pl-10'>
                            <Link to={"/signin"}>Login</Link>/
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                        {/* mobile device */}
                        <div className='md:hidden'>
                            <RxHamburgerMenu onClick={() => setOpen(!open)}
                                className='text-2xl text-gray-600' />
                        </div>
                        <div className={`fixed md:hidden top-0 right-0 p-3 w-36 z-60 bg-white shadow-md rounded-2xl transform transition duration-300
                            ${open ? ' translate-x-0' : 'translate-x-full'}
                            `} >
                            <div className='flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-5'>
                                <h1 className='text-lg text-gray-600 font-medium'>Menu</h1>
                                <IoMdClose onClick={() => setOpen(!open)} className='text-xl text-black' />

                            </div>
                            {open && (
                                <div className='flex flex-col gap-5 text-gray-700 '>
                                    <Link to={"/"}>Home</Link>
                                    <Link to={"/course"}>Course</Link>
                                    <Link to={"/blog"}>Blog</Link>
                                    <Link to={"/pages"}>Pages</Link>
                                </div>
                            )

                            }
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