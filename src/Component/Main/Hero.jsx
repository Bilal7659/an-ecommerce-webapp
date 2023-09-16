import React from 'react'
import '../Main/Style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Hero() {
  return (
    <div id='hero' className='main-hero'>
        <div className="hero-content" data-aos="fade-in"data-aos-duration="3000">
            <img src="./Images/slide-1.jpg" alt="" />
            <div className="text-content" data-aos="fade-down"data-aos-duration="1600" data-aos-offset="100">
                <h2>Bakery Shop</h2>
                <p data-aos="fade-up"data-aos-duration="3000">Your Family Baker Since 2015</p>
            </div>
        </div>
    </div>
  )
}
