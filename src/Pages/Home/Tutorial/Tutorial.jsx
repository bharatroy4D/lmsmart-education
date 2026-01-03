import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Tutorial = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('/tutorial.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='container px-4 lg:px-10 pb-8 lg:pb-16 mx-auto '>
            <h1 className='lg:text-center'><SectionTitle title={'Top Rated Learning Tutorials'} textSize={'text-3xl'} /></h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 lg:py-15'>
                    {
                        course.map(card => (
                            <div key={card.id} className='rounded shadow-lg' >
                                <img className='rounded h-40 w-full lg:w-72 ' src={card.image} alt="" />
                                <div className='space-y-5 p-5'>
                                    <div className='flex items-center justify-between mt-4'>
                                        <h1 className='bg-gray-100 py-0.5 px-2 rounded text-gray-500 font-medium'>{card.category}</h1>
                                        <h2 className='font-medium'>{card.price}</h2>
                                    </div>
                                    <h1 className='text-lg font-medium text-gray-800'>{card.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-8 rounded-full' src={card.author} alt="" />
                                        <h1 className='text-gray-400 font-semibold'>{card.author_name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Tutorial;