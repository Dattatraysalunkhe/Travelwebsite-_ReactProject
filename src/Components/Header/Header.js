import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
function Header({type}) {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOption] = useState(false)
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [destination,setDestination] = useState("")

    const navigate = useNavigate()
      
    const handleOption = (name,operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? option[name] +1 : option[name -1],
            }
        })
    }

    const handleSearch = () => {
            navigate("/hotels",{state :{destination,date,option}})
    }

    return (
        <div className='header'>
            <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} bounce />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                { type !== "list" &&
                  <>
                   <h1 className='headerTitle'>Book your Destination today..!</h1>
                <p className='headerDesc'> See More hotels and flights and book it today Get your 50% off</p>
                <button className='headerBtn'>Sign in/ Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type='text' placeholder='Destination' className='headerSearchInput' onChange={e=>setDestination(e.target.value)} />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDay} className='headerIcon' />
                        <span onClick={() => { setOpenDate(!openDate) }} className='headerSearchText'>{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={()=>setOpenOption(!openOptions)} className='headerSearchText'>{`${option.adult} adult .${option.children} children .${option.room} room`}</span>
                        {openOptions && <div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
                                    <span className='optionCounterNumber'>{option.adult}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>children</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
                                    <span className='optionCounterNumber'>{option.children}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
                                    <span className='optionCounterNumber'>{option.room}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn' onClick={handleSearch} >Search</button>
                    </div>
                </div> </>}

            </div>
        </div>
    )
}

export default Header
