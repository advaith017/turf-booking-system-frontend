import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import "./header.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const[destination, setDestination] = React.useState("")
  const[openDate, setOpenDate] = React.useState(false)

  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

    const navigate = useNavigate() 
    const handleSearch = () => {
    navigate('/turfs', {state: {destination, date}})
    }


  return (
    <div className="header">
      <div className="headerContainer">
        <div className='headerList'>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Turfs</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Why us?</span>
            </div>
        </div>
        <h1 className="headerTitle">Welcome To Bengaluru's favorite football destination</h1>
        <p className="headerDesc">
          With word class facilities and a team of experienced coaches, we are the best place to play football in Bengaluru
        </p>
        <button className="headerBtn">Book a Turf</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon ={faFutbol} className="headerIcon" />
            <input
              type="text"
              placeholder="Search for a turf"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>    
          <div className="headerSearchItem">
            <FontAwesomeIcon icon ={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to 
            ${format(date[0].endDate,"MM/dd/yyyy")}`} </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="date"
              />}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch} >Search</button>
        </div>
        </div>

       
    </div>
    </div>

  )
}

export default Header