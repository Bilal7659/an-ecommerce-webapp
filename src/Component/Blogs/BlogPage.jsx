import React from 'react'
import '../Blogs/BlogsStyle.css'
import Footer from '../Footer/Footer'
import {BsCalendarDate,BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {FaRegComments} from 'react-icons/fa'
import BlogData from './BlogData'
export default function BlogPage() {
  return (
    <div className='blog-page'>
        <div className="container">
      <div className="main-blog-heading">
            <h2>OUR BLOGS</h2>
            </div>
            <div className="blogs-main-card">
        {BlogData.map(item=>(
               <div className="blogs-cards" key={item.id}>
               <img src={item.image} alt="" />
               <div className="content">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p style={{display:'flex',justifyContent:'start',gap:'1.5rem',marginTop:'2rem'}}><span><BsCalendarDate style={{color:'#fdb822',marginRight:'-1rem'}}/></span>october 31 2023 <span><BsFillFileEarmarkPersonFill style={{color:'#fdb822',marginRight:'-2rem'}}/></span>pies<span><FaRegComments style={{fontSize:'1rem',color:'#fdb822',marginRight:'-1rem'}}/></span>no comments</p>
               </div>
              </div>
        ))}
       </div>
        </div>
        <Footer/>
    </div>
  )
}
