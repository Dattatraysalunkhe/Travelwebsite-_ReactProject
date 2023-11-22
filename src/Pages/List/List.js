import React, { useState } from 'react'
import './List.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchItem/SearchItem'


function List() {
  const location =useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate]=useState(false)
  const [option,setOption] = useState(location.state.option)
  return (
    <div>
      <Navbar/><Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
            <div className='listSearch'>
              <h1  className='lsTitle'>Search</h1>
              <div className='isItem'>
                <label className=''>Destination</label>
                     <input type='text' placeholder={destination}/>
              </div>
              <div className='isItem'>
                <label className=''>Check-in-Date</label>
                     <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                     {openDate && ( <DateRange
                     onChange={item=>setDate([item.selection])} minDate={new Date()}
                     />)}
              </div>
              <div className='isItem'>
                <label>Option</label>
                <div className='isOptionItem'>
                    <span className='isOptionText'>Min Price <small>pernight</small> </span>
                    <input type='number' className='isOptionInput'/>
                </div>
                <div className='isOptionItem'>
                    <span className='isOptionText'>Max Price <small>pernight</small> </span>
                    <input type='number' className='isOptionInput'/>
                </div>
                <div className='isOptionItem'>
                    <span className='isOptionText'>Adult </span>
                    <input type='number' min={1} className='isOptionInput' placeholder={option.adult}/>
                </div>
                <div className='isOptionItem'>
                    <span className='isOptionText'>children</span>
                    <input type='number' min={0} className='isOptionInput' placeholder={option.children}/>
                </div>
                <div className='isOptionItem'>
                    <span className='isOptionText'>room </span>
                    <input type='number' min={1} className='isOptionInput' placeholder={option.room}/>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className='listResult'>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
