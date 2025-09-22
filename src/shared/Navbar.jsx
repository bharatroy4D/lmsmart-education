import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-blue-200'>
            <div className='flex justify-between items-center py-2 lg:py-3  max-w-11/12 mx-auto'>
                <img className='w-28 lg:w-36' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="" />

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
                        <MdOutlineShoppingCart className='tex-4xl text-gray-600 mx-7' />
                        <div className='hidden lg:block text-gray-600 border-l border-gray-700 pl-10'>
                            <Link to={"/signin"}>Login</Link>/
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                        {/* mobile device */}
                        <div className='md:hidden'>
                            <RxHamburgerMenu onClick={() => setOpen(!open)}
                                className='text-xl text-gray-600' />
                        </div>
                        <div className='absolute md:hidden top-12 right-0 py-2 px-10 bg-white shadow-md rounded-2xl transform transition duration-1000'>
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;