import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { profilesData } from '../assets/profilesData';

const About = () => {
    const [genderSort, setGenderSort] = useState(profilesData);
    const [index, setIndex] = useState(0)
    const [profileObj, setProfileObj] = useState({
        img: genderSort[index].img,
        name: genderSort[index].name,
        gender: genderSort[index].gender,
        occupation: genderSort[index].occupation
    })

    const updateProfileObj = (newIndex) => {
        setProfileObj({
            img: genderSort[newIndex].img,
            name: genderSort[newIndex].name,
            gender: genderSort[newIndex].gender,
            occupation: genderSort[newIndex].occupation
        });
    }

    const handleSelected = (e) => {
        let value = e.target.innerHTML
        value = value.toLowerCase()

        if (value == 'all') {
            setGenderSort(profilesData);
            setIndex(0);
            setProfileObj({
                img: profilesData[0].img,
                name: profilesData[0].name,
                gender: profilesData[0].gender,
                occupation: profilesData[0].occupation
            });
        } else {
            const filterByGender = profilesData.filter((profile) => {
                return (profile.gender.toLowerCase() === value)
            })
            setGenderSort(filterByGender)
            setIndex(0);
            setProfileObj({
                img: filterByGender[0].img,
                name: filterByGender[0].name,
                gender: filterByGender[0].gender,
                occupation: filterByGender[0].occupation
            });
        }

    }

    const handleDec = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
            updateProfileObj(index - 1)
        }
    }

    const handleInc = () => {
        if (index < genderSort.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
            updateProfileObj(index + 1)
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

                <div className='py-7 sm:px-4 flex md:flex-row flex-col flex-wrap justify-center gap-8 items-center'>

                    <button className='bg-red-900 text-white py-1 px-2 rounded font-bold'><i className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" onClick={handleDec}></i></button>

                    <div className='hover:cursor-pointer'>
                        <div className='shadow flex flex-col items-center w-[15rem] py-5 px-6 mx-auto bg-white rounded-[1rem] hover:scale-105 transition'>
                            <i className='pb-4 font-bold'><span className='font-semibold'>{index + 1}</span>/{genderSort.length}</i>
                            <img src={profileObj.img} alt="profile_pic" className='w-[7rem] rounded-full shadow ' />
                            <h1 className='font-extrabold text-[1.5rem]'>{profileObj.name}</h1>
                            <h2 className='font-bold text-[#1f7530]'>{profileObj.occupation}</h2>
                            <p className='font-semibold'>{profileObj.gender}</p>
                        </div>
                    </div>


                    <button className='bg-[green] text-white py-1 px-2 rounded font-bold' onClick={handleInc}> <i className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i></button>

                </div>


                <div className='py-7 sm:px-4 flex flex-wrap justify-center gap-8 items-center'>
                    {genderSort && genderSort.map((profile, index) => (
                        <div className='hover:cursor-pointer' key={index}>
                            <ProfileCard
                                img={profile.img}
                                name={profile.name}
                                occupation={profile.occupation}
                                gender={profile.gender}
                            />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default About;
