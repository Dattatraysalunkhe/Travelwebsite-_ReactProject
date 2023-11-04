import React from 'react'
import './MailList.css'

function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Get Instant Notification</h1>
        <span className='mailDesc'>Sign up to Get Connect With us</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='Enter Your Email'/>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default MailList
