import React, { useState } from 'react';

const SignUp = () => {
    const [submitted, setSubmitted] = useState(false);

    const [signUpData, setSignUpData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        confirmed: false,
        required: false
    });

    const HandleSignUpForm = (e) => {
        const { name, type, value } = e.target
        setSignUpData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? !prevData.required : value
            }
        })
    }

    const handleSubmitted = () => {
        // setSubmitted(true)
        console.log(signUpData);
    }


    return (
        <div className="flex justify-center items-center h-[100vh] w-[90%] mx-auto">
            <div className='mx-auto max-w-[25rem] shadow gradient-bg rounded-[10px] py-3 px-[15px]'>
                <h1 className='text-center font-bold py-3 text-[20px]'>SIGN UP</h1>
                <div className='flex flex-row flex-wrap gap-[15px]'>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>First Name</span>
                        <input type="text" className='rounded-[7px] text-md py-[2px]' name="firstName" value={signUpData.firstName} onChange={HandleSignUpForm} />
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>Middle Name</span>
                        <input type="text" className='rounded-[7px] text-md py-[2px]' name="middleName" value={signUpData.middleName} onChange={HandleSignUpForm} />
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>Last Name</span>
                        <input type="text" className='rounded-[7px] text-md py-[2px]' name="lastName" value={signUpData.lastName} onChange={HandleSignUpForm} />
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>Email</span>
                        <input type="email" className='rounded-[7px] text-md py-[2px]' name="email" value={signUpData.email} onChange={HandleSignUpForm} />
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>Password</span>
                        <input type="password" className='rounded-[7px] text-md py-[2px]' name="password" value={signUpData.password} onChange={HandleSignUpForm} />
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px] sm:w-[47%] w-[100%]'>
                        <span className='text-sm font-semibold'>Confirm Password</span>
                        <input type="password" className='rounded-[7px] text-md py-[2px]' name="" id="" />
                    </label>
                </div>

                <div className='flex flex-row gap-2 pt-5 pb-1'>
                    <label htmlFor="male" className='space-x-[3px]'>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value='male'
                            checked={signUpData.gender === 'male'}
                            onChange={HandleSignUpForm}
                        />
                        <span>Male</span>
                    </label>
                    <label htmlFor="female" className='space-x-[3px]'>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value='female'
                            checked={signUpData.gender === 'female'}
                            onChange={HandleSignUpForm}
                        />
                        <span>Female</span>
                    </label>
                    <label htmlFor="others" className='space-x-[3px]'>
                        <input
                            type="radio"
                            name="gender"
                            id="others"
                            value='others'
                            checked={signUpData.gender === 'others'}
                            onChange={HandleSignUpForm}
                        />
                        <span>Others</span>
                    </label>
                </div>

                <label htmlFor="required" className='space-x-[3px]'>
                    <input
                        type="checkbox"
                        name="required"
                        id="required"
                        value='required'
                        checked={signUpData.required}
                        onChange={HandleSignUpForm}

                    />
                    <span>Terms & Conditions</span>
                </label>

                <button className='block bg-gray-300 hover:bg-gray-200 px-3 py-[5px] mx-auto mt-3 rounded text-sm font-bold' onClick={handleSubmitted}>Submit</button>
                <a href="" className='text-[#3d3c3c] italic  text-sm hover:underline'> Already have an account? <span className='text-black' >Login</span></a>

                {/* {submitted ? <div className='text-sm flex flex-wrap text-atart'>
                    <h1 className='w-full font-black underline uppercase text-center'>Data</h1>
                    <p className='sm:w-[50%] w-80%'><span className='font-bold'>First Name:</span>  <br /> {signUpData.firstName}</p>
                    <p className='sm:w-[50%] w-80%'>Middle Name: <br />{signUpData.middleName}</p>
                    <p className='sm:w-[50%] w-80%'><span className='font-bold'>Last Name:</span> <br />{signUpData.lastName}</p>
                    <p className='sm:w-[50%] w-80%'><span className='font-bold'>Email:</span><br /> {signUpData.email}</p>
                    <p className='sm:w-[50%] w-80%'><span className='font-bold'>PassWord:</span><br /> {signUpData.password}</p>
                    <p className='sm:w-[50%] w-80%'><span className='font-bold'>checked:</span><br /> {signUpData.firstName}</p>
                </div> : ''} */}

            </div>
        </div>
    );
}

export default SignUp;
