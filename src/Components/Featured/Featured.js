import React from 'react'
import './Featured.css'


function Featured() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='./featured/Dubai.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dubai</h1>
                <h3>123Properties</h3>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='./featured/Prague.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Prague</h1>
                <h3>123Properties</h3>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='./featured/greece.jpg' alt='' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>greece</h1>
                <h3>123Properties</h3>
            </div>
        </div>
        
      
    </div>
  )
}

export default Featured
