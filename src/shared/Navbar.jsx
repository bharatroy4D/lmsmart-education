import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center max-w-11/12 mx-auto'>
                <img className='w-48' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="" />
                <div className='flex gap-4 text-lg font-medium'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/course"}>Course</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/pages"}>Pages</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;