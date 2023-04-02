import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
  <div class="searchItem">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqukdQWiQbSMQzoAX8KKqVKa40oSxQrbAFeg&usqp=CAU" alt="" class="siImg"/>
    <div className="siDesc">
<h1 className="siTitle">Tower Street Apartments</h1>
<span className="siDistance">500m from center</span>
<span className="siTaxi0p">Free Studs</span>
<span className="siSubtitle">
Contains two 10x10 turfs with a 5x5 goal post.
</span>
<span className="siFeatures">
Book Now!
</span>
<span className="siCancel0p">Free cancellation </span>
<span className="siCancel0pSubtitle">
You can cancel later, so lock in this great price today!
</span>
</div>
<div className="siDetails"></div>
</div>
  )
}

export default SearchItem