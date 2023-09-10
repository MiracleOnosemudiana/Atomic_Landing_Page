import React, { useState } from 'react';
import Button from './Button';

const Navbar = ({ setSubmitted }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>

            <nav className={`flex md:w-[90%] lg:w-[80%] w-[100%] mx-auto md:items-center md:bg-transparent bg-gray-900 ${toggle && 'items-start'}  justify-between p-[15px] transition-all relative z-[100]`}>
                <div className={`flex md:items-center  ${toggle && 'items-start'}`}>
                    <h1 className='md:text-[2.5rem] text-[1.5rem] font-bold md:text-black text-white'>Atomic</h1>
                    <ul className={`md:flex md:pt-0 px-4 text-sm items-center text-[grey] md:bg-transparent bg-gray-900 absolute md:static ${toggle ? 'py-3 z-[100] right-0 left-0 top-[4rem] text-center z-100' : 'hidden'}`}>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">Home</a>
                        </li>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">About</a>
                        </li>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">Services</a>
                        </li>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">Gallery</a>
                        </li>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">Blog</a>
                        </li>
                        <li className={`p-[7px] md:hover:bg-transparent hover:bg-gray-800 rounded`}>
                            <a href="">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-5 md:space-x-0 items-center'>
                    <div className='md:space-x-3 space-x-2'>
                        <Button
                            setSubmitted={setSubmitted}
                            bgColor='bg-[#188754]'
                            textColor='text-white'
                            text='Login'
                            borderRadius='rounded-full'
                        />
                        <Button
                            bgColor='bg-white'
                            textColor='text-black'
                            text='Sign Up'
                            borderRadius='rounded-full'
                            shadow='shadow'
                        />
                    </div>
                    <p className='px-[6px] rounded bg-[#188754] text-white text-extrabold md:hidden' onClick={handleToggle}>
                        {toggle ? <i className="fa fa-close" aria-hidden="true"></i>
                            : <i className="fa fa-bars" aria-hidden="true"></i>}
                    </p>
                </div>

            </nav>
        </>
    );
}

export default Navbar;