import React from 'react';

const Facilities = () => {
    return (
        <div className=''>
            <div className='container  lg:flex items-center justify-between bg-blue-950 gap-8 px-8 lg:px-10 mx-auto'>
                {/* card 1 */}
                <div className='flex items-center gap-6 py-7 text-white'>
                    <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/III98456.png" alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-medium'>Over 155,000</h1>
                        <h3 className=''>Video courses on career skills</h3>
                    </div>
                </div>
                {/* card 2 */}
                <div className='flex items-center gap-6 py-7 text-white'>
                    <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-2.png" alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-medium'>Choose from</h1>
                        <h3 className=''>Top industry instructors</h3>
                    </div>
                </div>
                {/* card 3 */}
                <div className='flex items-center gap-6 py-7 text-white'>
                    <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-3.png" alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-medium'>Lifetime access</h1>
                        <h3 className=''>On mobile and desktop</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;