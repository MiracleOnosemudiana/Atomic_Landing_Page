import React, { useState } from 'react';

const LogIn = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState({ email: false, pwd: false })
    const [errorMessage, setErrorMessage] = useState('');
    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    });

    const [detailIsValid, setDetailIsValid] = useState({ email: false, pwd: false })

    const HandleSignUpForm = (e) => {
        const { name, type, value } = e.target
        setShowErrorMsg(prev => ({
            ...prev,
            email: false,
            pwd: false
        }))
        setSubmitted(false)

        if (name == 'email') {
            setDetailIsValid(prev => ({
                ...prev,
                email: false
            }))
        }
        if (name == 'password') {
            setDetailIsValid(prev => ({
                ...prev,
                pwd: false
            }))
        }

        let trimmmedValue;
        if (name == 'email') {
            trimmmedValue = value.trim('')
        } else {
            trimmmedValue = value
        }
        setloginData(prevData => {
            return {
                ...prevData,
                [name]: trimmmedValue
            }
        })
    }

    const handleSubmit = () => {
        // e.preventDefault();
        // debugger
        if (detailIsValid.email != true && detailIsValid.pwd != true) {

            // Email Validation check 
            if (loginData.email != '') {
                // let emailRegex = /[a-zA-Z0-9]+@+[gmail]+\.+[com]/
                let emailRegex = /^([a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/
                let IsEmailValid = emailRegex.test(loginData.email)
                if (IsEmailValid != true) {
                    setErrorMessage('Invalid Email')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        email: true
                    }))
                } else {
                    setDetailIsValid(prev => ({
                        ...prev,
                        email: true
                    }))
                    setErrorMessage('Pls fill input field')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        pwd: true
                    }))
                }

            } else if (loginData.password != '') {
                setDetailIsValid(prev => ({
                    ...prev,
                    pwd: true
                }))
                if (loginData.email == '') {
                    setErrorMessage('Pls fill input field')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        email: true
                    }))
                }
            } else if (loginData.email == '' && loginData.password == '') {
                setErrorMessage('Pls fill input field')
                setShowErrorMsg(prev => ({
                    ...prev,
                    email: true,
                    pwd: true
                }))
            } else if (loginData.email == '' || loginData.password == '') {
                if (loginData.email == '') {
                    setErrorMessage('Pls fill input field')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        email: true
                    }))
                }
                if (loginData.password == '') {
                    setErrorMessage('Pls fill input field')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        pwd: true
                    }))
                }
            }
        }

        else if (detailIsValid.email != true) {
            // Email Validation check 
            if (loginData.email != '') {
                // let emailRegex = /[a-zA-Z0-9]+@+[gmail]+\.+[com]/
                let emailRegex = /^([a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/
                let IsEmailValid = emailRegex.test(loginData.email)
                if (IsEmailValid != true) {
                    setErrorMessage('Invalid Email')
                    setShowErrorMsg(prev => ({
                        ...prev,
                        email: true
                    }))
                } else {
                    setDetailIsValid(prev => ({
                        ...prev,
                        email: true
                    }))
                    setSubmitted(true)
                    // console.log(loginData);
                }

            } else {
                setErrorMessage('Pls fill input field')
                setShowErrorMsg(prev => ({
                    ...prev,
                    email: true
                }))
            }
        }

        else if (detailIsValid.pwd != true) {

            // Password validation check
            if (loginData.password != '') {
                setDetailIsValid(prev => ({
                    ...prev,
                    pwd: true
                }))
                setSubmitted(true)
            } else {
                setErrorMessage('Pls fill input field')
                setShowErrorMsg(prev => ({
                    ...prev,
                    pwd: true
                }))
            }

        }
        else {
            setSubmitted(true)
        }
    }



    return (
        // <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center min-h-[100vh] w-[90%] mx-auto py-4">
            <div className='mx-auto max-w-[25rem] shadow gradient-bg rounded-[10px] py-3 px-[15px]'>
                <h1 className='text-center font-bold py-3 text-[20px]'>LOG IN</h1>
                <div className='flex flex-col flex-wrap gap-[15px]'>

                    <label htmlFor="" className='flex flex-col space-y-[1px] w-[100%]'>
                        <span className='text-sm font-semibold'>Email</span>
                        <input type="email" className='rounded-[7px] text-md font-thin py-[2px] h-[2.5rem]'
                            name="email"
                            value={loginData.email}
                            onChange={HandleSignUpForm}
                            placeholder='Email'
                        />
                        {showErrorMsg.email && <span className='text-sm font-bold font-mono pt-1 text-[red]'>{errorMessage}</span>}
                    </label>
                    <label htmlFor="" className='flex flex-col space-y-[1px]w-[100%]'>
                        <span className='text-sm font-semibold'>Password</span>
                        <input type="password" className='rounded-[7px] text-md py-[2px] h-[2.5rem]' name="password" value={loginData.password} onChange={HandleSignUpForm} placeholder='Password' required />
                        {showErrorMsg.pwd && <span className='text-sm font-bold font-mono pt-1 text-[red]'>{errorMessage}</span>}
                    </label>

                </div>

                <div className='text-center flex flex-col items-center justify-center mt-5  gap-3'>
                    <button className='block bg-gray-300 hover:bg-gray-200 px-3 py-[5px] mx-autorounded text-sm font-bold rounded' type='submit' onClick={handleSubmit}>Login</button>
                    <a href="" className='text-[#3d3c3c] italic text-sm hover:underline text-right '> Don't have an account? <span className='text-black' >Sign Up</span></a>
                </div>
            </div>

            {submitted && <div className='text-sm pt-4'>
                <h1 className='font-bold '>LogIn Details:</h1>
                <p><span className='font-semibold'>Email:</span> {loginData.email} </p>
                <p><span className='font-semibold'>Password:</span>  {loginData.password}</p>
            </div>}
        </div>
        // </form> 
    );
}

export default LogIn;
