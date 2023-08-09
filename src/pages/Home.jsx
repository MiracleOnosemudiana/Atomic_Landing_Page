import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardSection from '../components/CardSection';

const Home = () => {
    return (
        <div>
            <div className='bg-[#EAE9E5] relative'>
                <Navbar />
                <Hero />
            </div>
            <CardSection />


        </div >
    );
}

export default Home;
