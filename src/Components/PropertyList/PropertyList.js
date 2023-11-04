import React from 'react'
import './PropertyList.css'


function PropertyList() {
  return (
    <div className='pList'>
       <div className='pListItem'>
         <img src='./hotel/Hotel.jpg' alt='' className='pListImg'/>
         <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>23 hotels</h2>
         </div>
       </div>
       <div className='pListItem'>
         <img src='./hotel/Resort.jpg' alt='' className='pListImg'/>
         <div className='pListTitles'>
            <h1>Resort</h1>
            <h2>233 hotels</h2>
         </div>
       </div>
       <div className='pListItem'>
         <img src='./hotel/Apartment.jpg' alt='' className='pListImg'/>
         <div className='pListTitles'>
            <h1>Apartment</h1>
            <h2>233 hotels</h2>
         </div>
       </div>
       <div className='pListItem'>
         <img src='./hotel/Villas.jpg' alt='' className='pListImg'/>
         <div className='pListTitles'>
            <h1>Villas</h1>
            <h2>233 hotels</h2>
         </div>
       </div>
    </div>
  )
}

export default PropertyList
