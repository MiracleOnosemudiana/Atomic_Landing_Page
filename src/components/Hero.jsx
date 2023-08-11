import React from 'react';
import Button from './Button';
import Aloe_vera from '../assets/aloe_vera.png'

const Hero = () => {
    return (
        <div className='md:w-[90%] lg:w-[80%] w-[98%] mx-auto p-[15px] py-10 space-y-5 md:space-y-16'>
            <div className='lg:w-[60%] md:w-[65%] w-full'>
                <h1 className=' font-extrabold text-[2rem] md:text-[2.9rem] leading-tight'>Design a better Website template</h1>
                <p className='text-md py-3 font-thin text-[grey]'>Building your brand's Website and get detailed insights on how templates are Created</p>
            </div>
            <div className='lg:pb-[13rem] md:pb-[5rem] pb-[6rem] '>
                <Button
                    bgColor='bg-[#188754]'
                    textColor='text-white'
                    text='FREE DOWNLOAD'
                    borderRadius='rounded'
                />
            </div>
            <img src={Aloe_vera} alt="aloe vera plant" className='absolute bottom-0 right-0 sm:w-[100%] opacity-50 md:opacity-100 z-[0]' />
        </div>
    );
}

export default Hero;
