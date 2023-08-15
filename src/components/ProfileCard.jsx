import React from 'react';

const ProfileCard = ({ name, img, occupation, gender }) => {
    return (
        <div className='shadow flex flex-col items-center w-[15rem] py-5 px-6 mx-auto bg-white rounded-[1rem] hover:scale-105 transition'>
            <img src={img} alt="profile_pic" className='w-[7rem] rounded-full shadow ' />
            <h1 className='font-extrabold text-[1.5rem]'>{name}</h1>
            <h2 className='font-bold text-[#1f7530]'>{occupation}</h2>
            <p className='font-semibold'>{gender}</p>
        </div>

    );
}

export default ProfileCard;
