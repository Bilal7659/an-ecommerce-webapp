import React from 'react'
import Hero from '../Main/Hero'
import Index from '../Services/Index'
import Product from '../Product/Product'
import SpecilOffer from '../SpecialOffer/Index'
import Blogs from '../Blogs/Index'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Nav'
import About from '../About/About'
import Area from '../Contact/Area'

export default function Home() {
  return (
    <div>
                <Navbar/>
                   <Hero/>
                     <Index/>
                       <Product/>
                          <SpecilOffer/>
                         <About/>
                      <Blogs/>
                    <Area/>
                <Footer/>
    </div>
  )
}
