import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-blue-200'>
            <div className='flex justify-between items-center py-3  max-w-11/12 mx-auto'>
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
                        <MdOutlineShoppingCart className='tex-3xl text-gray-600 mx-7' />
                        <div className='text-gray-600 border-l border-gray-700 pl-10'>
                            <Link to={"/signin"}>Login</Link>/
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                        {/* mobile device */}
                        <div className='md:hidden'>
                            <RxHamburgerMenu className='text-2xl text-gray-600' />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;