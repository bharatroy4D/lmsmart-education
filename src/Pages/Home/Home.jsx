import React from 'react';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                {/* banner context text */}
                <div>
                    <h3>Developed By To Teachers</h3>
                    <h1>Experience a learning platform that take you next level</h1>
                    <h2>World-class training and development programs developed by top teachers</h2>
                    <button className='btn btn-primary'>button</button>
                </div>
                {/* banner content image */}
                <div className='flex '>
                    <img className='lg:h-72' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />
                    <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;