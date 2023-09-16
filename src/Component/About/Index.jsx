import React from 'react'
import '../About/AboutStyle.css'
import {GrFormNextLink} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
export default function Index() {
  return (
    <div className='About'>
        <div className="container">
            <div className="about-content">
                <div className="about-cards">
                  <img src="./Images/slide-2.jpg"></img>
                </div>
                <div className="about-cards">
                    <div className="about-cards-content">
                        <h3>Bakery is one of the oldest in the US</h3>
                        <p>In our shop we stock a range of the bread, cakes and confectionery to order, along with cake boards and boxes to buy.</p>
                          <br />
                        <li><GrFormNextLink style={{marginRight:'1rem'}}/> Premium services and beyond your expectation</li>
                        <li><GrFormNextLink style={{marginRight:'1rem'}}/> We strive to keep a good selection of our products in store</li>
                        <li><GrFormNextLink style={{marginRight:'1rem'}}/> Our talented bakers also make customized celebration cakes</li>
                        <li><GrFormNextLink style={{marginRight:'1rem'}}/> We have a takeaway menu offering breakfast delights</li>
                        <br />
                        <p>The shop is open <strong> Monday to Friday from 8am-7pm</strong>, and on Saturdays from 8:30am-3pm, with the exception of bank holidays.</p>
                         <button className='btnb'>Watch the video</button>
                    </div>
                </div>
                <div className="about-cards">
                    <div className="about-cards-content">
                    <p>DID YOU KNOW THAT</p>
                    <h3>We began 55 years ago</h3>
                    <p>Bakery was founded in 1966 by John and Jessy Smith. They baked delicious bread and cakes for the shop, with Jessy serving the customers. Later on, their son with his wife Natalia joined and began delivering bread to the neighbouring places. They had one daughter, named Melany who worked with her family after leaving school, and eventually took over the bakery.
                         <br/>
                         <br />
Today, Bakery is run by Chris, the fifth generation of bakers in the family. Chris completed advanced training at City College, and is accompanied by a mighty team of passionate bakers, who all have a full range of skills in break making, pastry and confectionary.</p>
                    <br />
                      <NavLink to={'/blog'}><button className='btnb'>Read Full Story</button></NavLink>
</div>
                 
                </div>
                <div className="about-cards">
                    <img src="./Images/img-8.jpg" alt="" />                     
                </div>
            </div>
        </div>
    </div>
  )
}
