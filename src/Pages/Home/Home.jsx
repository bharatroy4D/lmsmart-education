import React from 'react';
import Banner from './Banner/Banner';
import Facilities from './Facilities/Facilities';
import Categories from './Categories/Categories';
import Tutorial from './Tutorial/Tutorial';
import Author from './Author/Author';
import Course from './Course/Course';

const Home = () => {
    return (
        <div>
            <Banner />
            <Facilities />
            <Categories />
            <Tutorial />
            <Author />
            <Course />
        </div>
    );
};

export default Home;