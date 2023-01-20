import React from 'react'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCar, faPlane, faTaxi, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export const Header = () => {
  const [openDate,setOpneDate] = React.useState(false)
 const [date,setDate] = React.useState([
  {
    startDate : new Date(),
    endDate : new Date(),
    key : 'selection'
  }
 ]);
 const [openOptions,setOpenOptions] = React.useState(false)
 const [options,setOptions] = React.useState({
  adult :1,
  children :0,
  room : 1
 })

  return (
    <div className='header'>
        <div className="headerContainer">
        
        
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
            </div>
        </div>
        
        
        <h1 className="headerTitle">A lifetime of discounts? it's a Genius.</h1>
        <p className="headerDesc">
        Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
       
       
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
            </div>
        
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
               <span onClick={()=>setOpneDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
              {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />}
            </div>


          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
               <span className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adults</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("adult",'d')}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult",'i')}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("children",'d')}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children",'i')}>+</button>
                  </div>
                </div>


                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("room",'d')}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room",'i')}>+</button>
                  </div>
                </div>
              </div>
            
            </div>
        
        
            <div className="headerSearchItem">
           <button className='headerBtn'>Search</button>
            </div>
        
        </div>
        </div>
    </div>
  )
}
