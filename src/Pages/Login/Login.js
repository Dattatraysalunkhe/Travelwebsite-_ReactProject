import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src='./login/person.png' alt='' />
                    <input type='text' />
                </div>
                <div className='input'>
                    <img src='./login/email.png' alt='' />
                    <input type='email' />
                </div>
                <div className='input'>
                    <img src='./login/password.png' alt='' />
                    <input type='password' />
                </div>
            </div>
            <div className='forgotpassword'>Forgot Password <span>Clich here</span> </div>
            <div className='submitcontainer'>
                <div className='submit'>Sign up</div>
                <div className='submit'>Log in</div>
            </div>
        </div>
    )
}

export default Login
