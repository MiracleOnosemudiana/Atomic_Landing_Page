import React, { useState } from 'react';

const NewLogin = ({ submitted, setSubmitted }) => {
    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        emailError: '',
        passwordError: ''
    })

    const handleFormData = (e) => {
        const { name, type, value } = e.target
        setloginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    console.log(0.6+0.2);
    console.log(0.1+0.2);


    const emailRegex = /^([a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4})$/
    const emailValid = emailRegex.test(loginData.email)


    // still under development stage
    const passwordRegex = /^([a-zA-Z0-9]{5,12})$/
    const passwordValid = passwordRegex.test('JoYcE123')
    // <.>

    const handleSubmit = () => {

        if ((loginData.email === '') && (loginData.password === '')) {
            setError((prevError) => ({
                ...prevError,
                emailError: 'Email Required*',
                passwordError: 'Password Required*'
            }))
        } else if (!(loginData.email === '') && (loginData.password === '')) {
            if (!(emailValid === true)) {
                setError((prevError) => ({
                    ...prevError,
                    emailError: 'Invalid Email*'
                }))
            }
            setError((prevError) => ({
                ...prevError,
                passwordError: 'Password Required*'
            }))
        } else if ((loginData.email === '') && !(loginData.password === '')) {
            setError((prevError) => ({
                ...prevError,
                emailError: 'Email Required*'
            }))
        }

        if (!(loginData.email === '') && !(loginData.password === '')) {
            if (!(emailValid === true)) {
                setError((prevError) => ({
                    ...prevError,
                    emailError: 'Invalid Email*'
                }))
            } else {
                setSubmitted(false)
            }
        }

    }

    return (
        // <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center min-h-[100vh] w-[90%] mx-auto py-4 text-[white]">
            <div className='mx-auto md:w-[25rem] max-w-[25rem] shadow gradient-bg rounded-[10px] md:py-5 py-3 md:px-[20px] px-[15px]'>
                <h1 className='text-center font-bold py-3 text-[20px]'>LOG IN</h1>
                <div className='flex flex-col flex-wrap gap-[15px] '>

                    <label htmlFor="" className='flex flex-col space-y-[1px] w-[100%]'>
                        <span className='text-sm font-semibold'>Email</span>
                        <input type="email" className='rounded-[7px] text-md font-thin py-[2px] h-[2.5rem] text-black'
                            name="email"
                            value={loginData.email}
                            onChange={handleFormData}
                            onFocus={() => (
                                setError((prevError) => ({
                                    ...prevError,
                                    emailError: '',
                                    passwordError: ''
                                }))
                                // ,setSubmitted(false)
                            )}
                            placeholder='Email'
                        />
                        <span className='text-sm font-bold font-mono pt-1 text-[red]'>{error.emailError}</span>
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px]w-[100%]'>
                        <span className='text-sm font-semibold'>Password</span>
                        <input type="password" className='rounded-[7px] text-md py-[2px] h-[2.5rem] text-black' name="password"
                            value={loginData.password}
                            onChange={handleFormData}
                            placeholder='Password'
                            onFocus={() => (
                                setError((prevError) => ({
                                    ...prevError,
                                    emailError: '',
                                    passwordError: ''
                                }))
                                // ,setSubmitted(false)
                            )}
                        />
                        <span className='text-sm font-bold font-mono pt-1 text-[red]'>{error.passwordError}</span>
                    </label>

                </div>

                <div className='text-center flex flex-col items-center justify-center mt-5  gap-3'>
                    <button className='block bg-gray-800 hover:bg-gray-200 hover:text-gray-800 transition-all px-3 py-[5px] mx-autorounded text-sm font-bold rounded' type='submit' onClick={handleSubmit}>Login</button>
                    <p className='text-[#989898] italic text-sm hover:underline text-right '> Don't have an account? <span className='text-[#efefef]' >Sign Up</span></p>
                </div>
            </div>

            {/* {submitted && <div className='text-sm pt-4 text-black'>
                <h1 className='font-bold uppercase border border-[#6c6c6c] rounded px-1 mb-1'>LogIn Details</h1>
                <div className='border border-[#6c6c6c] rounded px-2 py-2'>
                    <p><span className='font-semibold'>Email:</span> {loginData.email} </p>
                    <p><span className='font-semibold'>Password:</span> <span className=''>{loginData.password}</span></p>
                </div>
            </div>} */}

        </div>
        //  </form> 
    );
}

export default NewLogin;
