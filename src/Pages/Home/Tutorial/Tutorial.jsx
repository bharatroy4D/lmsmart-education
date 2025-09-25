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
            <h1 className='text-center'><SectionTitle title={'Top Rated Learning Tutorials'} /></h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 lg:py-15'>
                    {
                        course.map(card => (
                            <div key={card.id} >
                                <img className='rounded h-40 w-72' src={card.image} alt="" />
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Tutorial;