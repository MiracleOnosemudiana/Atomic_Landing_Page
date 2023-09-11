import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardSection from '../components/CardSection';

const Home = ({ submitted, setSubmitted }) => {
    return (
        <div>
            <div className='bg-[#EAE9E5] relative z-[0]'>
                <Navbar
                    submitted={submitted}
                    setSubmitted={setSubmitted} />
                <Hero />
            </div>
            <CardSection />
        </div >
    );
}

export default Home;
