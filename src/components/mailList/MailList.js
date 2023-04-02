import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Join our mailing list</h1>
        <span className="mailDesc">Get timely updates about upcoming events</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your email" className="mailInput"/>
            <button className="mailButton">Join</button>
        </div>
    </div>
  )
}

export default MailList