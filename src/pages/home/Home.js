import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import TurfList from '../../components/turfList/TurfList'
import "./home.css"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by location</h1>
          <TurfList/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home