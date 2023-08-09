import React from 'react';
import Card from '../components/Card';
import { cardData } from '../assets/cardData';

const CardSection = () => {
    return (
        <div className='bg-white w-[90%] relative -top-[5rem] left-0 right-0 m-auto shadow '>
            <div className='w-full flex flex-col sm:flex-row justify-around px-6 py-10 gap-6 ' >
                {/* <Card
                    icon={lightBulb}
                    title='Intiutive Thinking'
                    content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minus.'
                />
                <Card
                    icon={carrot}
                    title='Orange for carrots'
                    content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minus.'
                />
                <Card
                    icon={infinity}
                    title='Infinit Possibilities'
                    content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, minus.'
                /> */}

                {cardData.map((cardItem, index) => (
                    <Card
                        key={index}
                        icon={cardItem.icon}
                        title={cardItem.title}
                        content={cardItem.content}


                    />
                ))}

            </div>
        </div>
    );
}

export default CardSection;
