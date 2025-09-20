import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-blue-200'>
            <div className='flex justify-between items-center py-3 border-gray-600 max-w-11/12 mx-auto'>
                <img className='w-36' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="" />

                <div>
                    <div className='flex items-center'>
                        <div className='flex gap-7 text-gray-700'>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/course"}>Course</Link>
                            <Link to={"/blog"}>Blog</Link>
                            <Link to={"/pages"}>Pages</Link>
                        </div>
                        {/* search bar */}
                        <div className='flex border border-gray-400 text-gray-700 py-1 px-3 ml-10'>
                            <input type="text" name="" id="" placeholder='Search' />
                            <CiSearch className='text-xl' />
                        </div>
                        <MdOutlineShoppingCart className='tex-3xl text-gray-600 mx-7' />
                        <div className='text-gray-600 border-l border-gray-700 pl-10'>
                            <Link to={"/login"}>Login</Link>/
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;