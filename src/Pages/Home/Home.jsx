import React from 'react';

const Home = () => {
    return (
        <div className='bg-base-200 roboto lg:py-24'>            
            <div className='flex justify-between items-center gap-10 w-11/12 mx-auto'>
                {/* banner context text */}
                <div className='flex flex-col gap-5 w-[50%]'>
                    <h3 className='text-base text-gray-400 font-medium uppercase'>Developed By To Teachers</h3>
                    <h1 className='text-5xl text-gray-700 font-bold'>Experience a learning platform that take you next level</h1>
                    <h2 className='text-base text-gray-400  lg:w-96'>World-class training and development programs developed by top teachers</h2>
                    <button className='btn btn-secondary w-fit'>Explore All Course</button>
                </div >
                {/* banner content image */}
                <div className='flex relative items-end w-[50%] '>
                    <img className='lg:h-72 ' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />
                    <img className='lg:w-64' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                    <img className='absolute top-1/4 right-96 z-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SHA43.png" alt="" />

                </div>
            </div>
            {/* background animation */}
            <div className='relative '>
                <img className='absolute top-1/6 right-1/4 z-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MS425.png" alt="" />
            </div>

        </div>
    );
};

export default Home;