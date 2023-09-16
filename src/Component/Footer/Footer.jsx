import React from 'react'
import './Footer.css'
import {MdSend} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
      <div className="f-content">
        <div className="f-log">
          <img src="./Images/bakery-logo-light.png" alt="" />
        </div>
        <div className="timing">
          <h2>Working Hour</h2>
          <p>Monday Friday: 08:00 am – 08:30 pm<br/>
            Saturday: 10:00 am – 16:30 pm<br/>
            Sunday: 10:00 am – 16:30 pm</p>
        </div>
        <div className="timing">
          <h2>Happy Hour</h2>
          <p>Join us for Happy Hour!<br/>
              Enjoy discount baked goods.<br/>
                 8:00 pm-5:00 pm Daily</p>
        </div>
        <div className="timing">
          <h2>Subscribe</h2>
          <p style={{color:'#d6d8db'}}>Get latest updates and offers.</p>
            <div className="news-letter">
                <input type="email" name="" id="" placeholder='Your emill address*' />
                <button><MdSend className='send-icon'/></button>
            </div>
        </div>
      </div>
      <hr className='line' />
      <div className="copy">
        <div className="our-right">
           <p style={{color:'#d6d8db',fontSize:'12px'}}>Copyright © 2015-2018 Bakery WordPress Theme by 
           <span ><a style={{fontWeight:'bolder',textDecoration:'none',color:'#fff'}} href="/">  Milengona.</a></span></p>
        </div>
        <div className="social-icons">
      <a href="https://facebook.com" className="social-icon ">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" className="social-icon">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" className="social-icon">
        <FaInstagram />
      </a>
    </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
