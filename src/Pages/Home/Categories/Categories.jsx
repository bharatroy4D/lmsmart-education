import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Categories = () => {
    return (
        <div className='container px-4 lg:px-10 mx-auto'>
            <div className='py-20'>
                <div className='flex  justify-between items-center '>
                    <SectionTitle title={'Featured topics by category'} textSize={"text-3xl"} />
                    <button className='btn btn-outline font-bold hidden md:block'>Explore More</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-12 lg:grid-cols-4 gap-4'>
                    {/* card 1 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/pencil.png" alt="" />
                        <h1 className='text-2xl font-medium'>Design</h1>
                    </div>
                    {/* card 2 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/science.png" alt="" />
                        <h1 className='text-2xl font-medium'>Chemistry</h1>
                    </div>
                    {/* card 3 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/tech.png" alt="" />
                        <h1 className='text-2xl font-medium'>Technology</h1>
                    </div>
                    {/* card 4 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/med.png" alt="" />
                        <h1 className='text-2xl font-medium'>Medical</h1>
                    </div>
                    {/* card 5 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/math.png" alt="" />
                        <h1 className='text-2xl font-medium'>Mathmetics</h1>
                    </div>
                    {/* card 6 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/food-delivery.png" alt="" />
                        <h1 className='text-2xl font-medium'>Food & Recipe</h1>
                    </div>
                    {/* card 7 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/graduating-student.png" alt="" />
                        <h1 className='text-2xl font-medium'>Language</h1>
                    </div>
                    {/* card 8 */}
                    <div className='flex gap-5 items-center rounded bg-gray-100 hover:bg-blue-950 p-7 hover:text-white'>
                        <img className='w-14' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/art-book.png" alt="" />
                        <h1 className='text-2xl font-medium'>Art & Block</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;