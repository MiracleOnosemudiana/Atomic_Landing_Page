import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { profilesData } from '../assets/profilesData';

const About = () => {
    const [genderSort, setGenderSort] = useState(profilesData);

    const handleSelected = (e) => {
        let value = e.target.innerHTML
        value = value.toLowerCase()

        if (value == 'all') {
            setGenderSort(profilesData)
        } else {
            const filterByGender = profilesData.filter((profile) => {
                return (profile.gender.toLowerCase() === value)
            })
            setGenderSort(filterByGender)
        }
    }

    return (
        <div className='w-full'>
            <div className='bg-[#188754] text-center text-white pt-5 px-2'>
                <div className=' md:w-[80%] mx-auto'>
                    <h1 className=' font-black'>ABOUT</h1>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nemo libero obcaecati rem eum voluptate consequatur corporis iure fugit corrupti?</p>
                </div>

                <ul className='py-[1rem] flex justify-center gap-2 text-sm text-[#cacaca]'>
                    <li className='hover:bg-gray-800 bg-gray-700 active:bg-gray-800 px-[13px] py-[5px] rounded' onClick={handleSelected}>ALL</li>
                    <li className='hover:bg-gray-800 bg-gray-700 active:bg-gray-800 px-[13px] py-[5px] rounded' onClick={handleSelected}>MALE</li>
                    <li className='hover:bg-gray-800 bg-gray-700 active:bg-gray-800 px-[13px] py-[5px] rounded' onClick={handleSelected}>FEMALE</li>
                </ul>
            </div>
            <div className='md:w-[100%] bg-[#D3C4FC]'>
                <div className='py-7 sm:px-4 flex flex-wrap justify-center gap-8 items-center'>

                    {genderSort && genderSort.map((profile, index) => (
                        <ProfileCard
                            key={index}
                            img={profile.img}
                            name={profile.name}
                            occupation={profile.occupation}
                            gender={profile.gender}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default About;
