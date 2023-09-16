import React, { useState,useEffect } from 'react'
import './NavBarStyle.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { FaTimes,FaShoppingCart, FaBars} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { useMyContext } from '../../Context';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

     const {cart} = useMyContext();
   
  return (
    <>
      
      <section className="mainhead">
          <ul id= 'navbar'>
          <NavLink to={'/'} className="same-nav-link"><li><a href="/">Home</a></li></NavLink>
                <NavLink to={'/about'} className="same-nav-link"><li><Link to="about">Our Story</Link></li></NavLink>
                <NavLink to={'/product'} className="same-nav-link"><li><Link to="product">shop</Link></li></NavLink>
               <li><Link to="/" ><img src="./Images/bakery-logo-dark.png" alt="" className="logo" /></Link></li>
               <NavLink to={'/blog'} className="same-nav-link"><li><Link to="blog">Blog</Link></li></NavLink>
                <NavLink to={'/contact'} className="same-nav-link"><li><Link to="contact">Contact</Link></li></NavLink>
                <NavLink to={'/cart'}><div className="cart-icon ">
                    <FaShoppingCart className="cart-icon__icon" />
                    <span className="cart-icon__caption">{cart.length}</span>
                     </div></NavLink> 
                           </ul>
            <div className="mobile-togle">
            <NavLink to={'/cart'}><div className="cart-icon ">
                    <FaShoppingCart className="cart-icon__icon" />
                    <span className="cart-icon__caption">{cart.length}</span>
                     </div></NavLink> 
                    <div className="mobile-logo">
              <a href="/"><img src="./Images/bakery-logo-dark.png" alt="" className="logo" /></a>
              </div>
              <div className='hamburger' >
              <a href="/"><BiSearchAlt2 style={{ fontSize: "1.5rem",paddingRight:'.5rem', cursor: "pointer" }} /></a>
              {!nav ? <FaBars size={30} style={{ color: 'black' }} onClick={handleClick} /> :
                <FaTimes size={30} style={{ color: 'black' }} onClick={handleClick} /> }
                </div>
            </div>
                                   {/*---------------- mobile navLink ------- */}
                <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='nav'>
                <NavLink to={'/'}><li><Link to="/" className="active" onClick={handleClick}>Home</Link></li></NavLink>
                <NavLink to={'/about'}><li><Link to="about" onClick={handleClick}>Our Story</Link></li></NavLink>
                <NavLink to={'/product'}><li><Link to="contact" onClick={handleClick}>shop</Link></li></NavLink>
            <NavLink to={'/blog'}><li><Link to="contact" onClick={handleClick}>Blog</Link></li></NavLink>
                <NavLink to={'/contac'}><li><Link to="contact" onClick={handleClick}>Contact</Link></li></NavLink>
                </ul>
            </div>
    </section>
   </>
  )
}

export default Navbar
