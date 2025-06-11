import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
     <footer>
       <div className="footer" id='footer-container'>
      <div className="footer-content">
        <div className="footer-content-left">

          <img src={assets.logo} alt="" />

        </div>
        <div className="footer-content-center">
           <ul>
            <li><span style={{color:"#4567aa"}}>8(912) 038-80-44</span></li>
            <li>298690, Russia, Crimea, Yalta, Foros, Forossky descent, 1</li>
           </ul>
        </div>
        <div className="footer-content-center">
           <ul>
            <li>Rooms and prices</li>
            <li>About the hotel</li>
            <li>Services</li>
            <li>Accommodation</li>
            <li>Contacts</li>
            <li>Guest reviews</li>
            <li>News</li>
            <li>conditions</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <ul>
                <li>Attractions</li>
                <li>pasta bar</li>
                <li>Active recreation</li>
                <li>EXTREME</li>
                <li>BOAT TRIPS</li>
                <li>FISHING</li>
                <li>Special offers</li>
            </ul>
        </div>
      </div>
      <div className="footer-end">
        <p className="footer-copyright">© 2025 Santorini. All rights reserved.</p>
        <p className='footer-copyright'>Privacy Policy</p>        
      </div>
    </div>    
    </footer>
    </>
  )
}

export default Footer