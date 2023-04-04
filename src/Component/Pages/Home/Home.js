import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Offers from './Offers/Offers';
import TeamMember from './TeamMember/TeamMember';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Offers></Offers>
            <TeamMember></TeamMember>
            <Blogs className='bg-red-600'></Blogs>
        </div>
    );
};

export default Home;