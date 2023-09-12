import React from 'react';
import { SubmittedContext } from '../App';

const Button = ({ bgColor, textColor, text, borderRadius, shadow }) => {
    return (
        <SubmittedContext.Consumer>
            {({ submitted, setSubmitted }) => {
                return  <button onClick={() => setSubmitted(true)} className={`${bgColor} ${textColor} py-[4px] px-[7px] md:py-[7px] md:px-[15px] cursor-pointer ${borderRadius} ${shadow}`}>{text}</button>

            }}
        </SubmittedContext.Consumer>
    );
}

export default Button;
