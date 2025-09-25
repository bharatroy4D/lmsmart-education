import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { MdOutlineFacebook } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-blue-950'>
            <div className='container px-4 pt-7 lg:pt-20 lg:px-10 mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-6 lg:pb-10 border-b border-base-100/30 gap-10 items-center'>
                    {/* card 1 */}
                    <div className='space-y-3 text-white '>
                        <img className='w-44 ' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo-white.png" alt="" />
                        <p className='text-xl '>We support programs that create advancement for people</p>
                        {/* Social icon */}
                        <div className='flex items-center gap-5'>
                            <div className='w-fit border-2 border-gray-400 rounded-full'>
                                <MdOutlineFacebook className='text-3xl p-1  ' />
                            </div>
                            <div className='w-fit border-2 border-gray-400 rounded-full'>
                                <FaTwitter className='text-3xl p-1' />
                            </div>
                            <div className='w-fit border-2 border-gray-400 rounded-full'>
                                <AiFillInstagram className='text-3xl p-1' />
                            </div>

                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='text-white'>
                        <h1 className='text-2xl font-semibold'>useful links</h1>
                        <div className='flex flex-col gap-3 font-semibold mt-5'>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms & condition</p>
                            <p>Student spotlight</p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='text-white'>
                        <h1 className='text-2xl font-semibold'>Learning</h1>
                        <div className='flex flex-col gap-3 font-semibold mt-5'>
                            <p>Business Strategy</p>
                            <p>Become A Teacher</p>
                            <p>Project Management</p>
                            <p>Membership</p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className='text-white'>
                        <h1 className='text-2xl font-semibold'>Contact Us</h1>
                        <div className='flex flex-col gap-3 font-semibold mt-5'>
                            <p>+8801714414775</p>
                            <p>information@example.com</p>
                            <p>Biral Dinajpur, Dhaka </p>
                            <p>Bangladesh Asian Country</p>
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-white py-8 text-center'>© Copyright 2023 Pixelcurve All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;