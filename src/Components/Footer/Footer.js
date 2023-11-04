import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        <div className='fLists'>
           <ul className='fList'>
             <li className='fListItem'>Home</li>
             <li className='fListItem'>Fligts</li>
             <li className='fListItem'>Hotels</li>
             <li className='fListItem'>Car</li>
           </ul>
           <ul className='fList'>
             <li className='fListItem'>Terms & condtion</li>
             <li className='fListItem'>Cancellation policy</li>
             <li className='fListItem'>privacy</li>
             <li className='fListItem'>Contact us</li>
           </ul>
           <ul className='fList'>
             <li className='fListItem'>Policy</li>
             <li className='fListItem'>FAQ</li>
             <li className='fListItem'>Fligts</li>
             <li className='fListItem'>Help</li>
           </ul>
           <ul className='fList'>
             <li className='fListItem'>Careers</li>
             <li className='fListItem'>Offers</li>
             <li className='fListItem'>Home</li>
             <li className='fListItem'>Site map</li>
           </ul>
        </div>
        <div className='fText'>Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 Sky.com</div>
    </div>
  )
}

export default Footer
