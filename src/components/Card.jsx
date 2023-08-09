import React from 'react';

const Card = ({ icon, title , content}) => {
    return (
        <div className='flex flex-col '>
            <img src={icon} alt="" className='w-[3.5rem] ' />
            <h1 className='font-bold pb-3 text-lg'>{title}</h1>
            <p className='text-md'>{content}</p>
        </div>
    );
}

export default Card;
