import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import "./list.css"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
const List = () => {
  const location = useLocation()
  const[destination, setDestination] = React.useState(location.state.destination)
  const[date, setDate] = React.useState(location.state.date)
  const[openDate, setOpenDate] = React.useState(false)

  
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div class="listContainer">
        <div class="listWrapper">
          <div class="listSearch">
            <h1 class="lsTitle">Search</h1>
            <div class="lsItem">
              <label >Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div class="lsItem">
              <label >Check in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to 
            ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            {openDate && (<DateRange 
            onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} />)}
            </div>
              <button>Search</button>
          </div>
          <div class="listResult">
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List