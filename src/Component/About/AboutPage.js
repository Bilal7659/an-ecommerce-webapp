import React from 'react'
import '../About/AboutStyle.css'
import Index from './Index'
import OurCheifs from './OurCheifs'
import Footer from '../Footer/Footer'
export default function AboutPage() {
  return (
    <div className='about-page'>
        <div className="container">
            <div className="about-page-content">
            <div className="main-about-heading">
            <h2>About Us</h2>
        </div>
        <Index/>
        <OurCheifs/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
