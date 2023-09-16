import React from 'react'
import '../About/AboutStyle.css'
export default function OurCheifs() {
    const chiefData = [
        {
            id: 1,
            image:'./Images/team-1.jpg',
            name: 'John'
        },
        {
            id: 2,
            image:'./Images/team-2.jpg',
            name: 'Maria'
        },
        {
            id: 3,
            image:'./Images/team-3.jpg',
            name: 'Vigo'
        },
        {
            id: 4,
            image:'./Images/team-4.jpg',
            name: 'Vector'
        },
        {
            id: 5,
            image:'./Images/team-5.jpg',
            name: 'Aqua'
        },
        {
            id: 6,
            image:'./Images/team-6.jpg',
            name: 'Spider'
        },
    ]
  return (
    <div className='our-cheifs'>
                   <div className="cheifs-heading">
            <h2>OUR TEAM</h2>
            <p>Each member of our team is a specialist in his or her field</p>
                   </div>
                   <div className="cheif-main-card">
        {chiefData.map(item=>(
               <div className="cheif-cards" key={item.id}>
               <img src={item.image} alt="" />
               <div class="overlay">
                   <p class="name">{item.name}</p>
                   </div>
              </div>
        ))}
       </div>
    </div>
  )
}
