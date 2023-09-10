import React from 'react';

const Button = ({ bgColor, textColor, text, borderRadius, shadow, setSubmitted }) => {
    return (
        <button onClick={() => setSubmitted(true)} className={`${bgColor} ${textColor} py-[4px] px-[7px] md:py-[7px] md:px-[15px] cursor-pointer ${borderRadius} ${shadow}`}>{text}</button>
    );
}

export default Button;
