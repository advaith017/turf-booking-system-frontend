import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src ="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/09/12/Photos/turf-kHJF--621x414@LiveMint.jpg"></img>
            <div className="featuredTitles">
                <h1>Kammanahalli</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg"  src ="https://5.imimg.com/data5/SELLER/Default/2022/4/DZ/XW/EK/2156888/football-turf-500x500.jpg"></img>
            <div className="featuredTitles">
                <h1>Koramangala</h1>
            </div>
        </div>
    
        <div className="featuredItem">
            <img className="featuredImg"  src ="https://static.toiimg.com/photo/msid-61827140/61827140.jpg"></img>
            <div className="featuredTitles">
                <h1>JP Nagar</h1>
            </div>
        </div>
    </div>

  )
}

export default Featured