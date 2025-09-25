import React from 'react';
import Banner from './Banner/Banner';
import Facilities from './Facilities/Facilities';
import Categories from './Categories/Categories';
import Tutorial from './Tutorial/Tutorial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Facilities />
            <Categories />
            <Tutorial/>
        </div>
    );
};

export default Home;