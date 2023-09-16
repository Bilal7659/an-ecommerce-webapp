import React from 'react'
import '../Blogs/BlogsStyle.css'
import {HiOutlineCalendar} from 'react-icons/hi'
import BlogData from './BlogData'
export default function Blogs() {
   
  return (
    <div id='blog' className='blogs'>
             <div className="container">
        <div className="blog-heading">
            <h2>BLOG POSTS</h2>
            <p>Check our latest articles, what we are talking about</p>
        </div>
        <div className="blog-card">
            {BlogData.map(item=>(
                        <div className="card" key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="blog-content">
                           <h5>{item.name}</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor
                            incidunt ut labore et dolore magna aliqua. Idque Caesaris [...]</p>
                            <p className='card-line'></p>
                            <p><span><HiOutlineCalendar style={{paddingRight:'3px'}} /></span> Oct 31 2017</p>
                        </div>
               </div>
            ))}
        
        </div>
    </div>
       </div>
  )
}
