import React from 'react';

const Home = () => {
    return (
        <div className='bg-base-200 roboto lg:py-24'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-10 container px-4 lg:px-10 mx-auto'>
                {/* banner context text */}
                <div className='flex flex-col gap-5 w-full lg:w-[50%]'>
                    <h3 className='text-base text-gray-400 font-medium uppercase'>Developed By To Teachers</h3>
                    <h1 className='text-3xl lg:text-5xl text-gray-700 font-bold'>Experience a learning platform that take you next level</h1>
                    <h2 className='text-base text-gray-400  lg:w-96'>World-class training and development programs developed by top teachers</h2>
                    <button className='btn btn-secondary w-fit'>Explore All Course</button>
                </div >
                {/* banner content image */}
                <div className='container hidden lg:flex flex-col relative items-end w-full lg:w-[50%] '>
                    <div className='flex flex-col lg:flex-row items-end gap-4 z-40'>
                        <img className='lg:h-72   lg:pb-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />

                        <img className='lg:w-64' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                    </div>

                    {/* background animation */}
                    <div className='flex absolute top-8 -left-8 z-30 '>
                        <img className=' hidden lg:block' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SHA43.png" alt="" />

                        <img className='absolute hidden lg:block z-40 -right-20 -top-4' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MS425.png" alt="" />
                        <img className='absolute hidden lg:block z-40 -bottom-64 -right-60' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SHA021.png" alt="" />
                    </div>

                </div>
                  {/* mobile device */}
                    <div className='flex flex-col gap-3  lg:hidden container '>
                        <img className='lg:h-72   lg:pb-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />

                    </div>
            </div>


        </div>
    );
};

export default Home;