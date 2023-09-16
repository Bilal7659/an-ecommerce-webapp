import React from 'react'
   import '../Services/Style.css'
   import {RiCake2Fill,RiCake3Line} from 'react-icons/ri'
   import {GiDeathJuice} from 'react-icons/gi'
   import {FaTruckDroplet} from 'react-icons/fa6'
   import {HiOutlineCake} from 'react-icons/hi'
export default function Index() {
    const services = [
        {
            id: 1,
            name: 'Bakery',
            icon: <RiCake2Fill className='serive-icon'/>,
            description: 'We have all your favorite traditional bread, 7 days a week! You can choose from a rich variety of cookies, pastries and cakes.'
        },
        {
            id: 2,
            name: 'Cakes',
            icon: <RiCake2Fill className='serive-icon'/>,
            description: 'We specialize in custom cakes for all occasions. You can choose from a variety of designs to create the perfect cake for you'
        },
        {
            id: 3,
            name: 'Freish juices',
            icon: <GiDeathJuice  className='serive-icon'/>,
            description: 'Choose from a variety of fruits and veggies to make your favorite juice. You can also enjoy a fresh squeezed orange juice.'
        },
        {
            id: 4,
            name: 'Catering',
            icon: <RiCake3Line className='serive-icon'/>,
            description: 'We do catering all from weddings to business functions. We offer our authentic food delivered, or we can serve it for you.'
        },
        {
            id: 5,
            name: 'Smile Truk',
            icon: <FaTruckDroplet className='serive-icon'/>,
            description: 'Our new awesome team will be hitting the streets with our best picked up goodies for you and much more.'
        },
        {
            id: 6,
            name: 'Weddings',
            icon: <HiOutlineCake className='serive-icon'/>,
            description: 'From elegant wedding cakes to delicious gift baskets, we can help you create a perfect and unique wedding.'
        },
    ]
  return (
    <div id='service' className='services'>
      <div className="container">
        <div className="service-heading">
            <h2>Our Services</h2>
            <p>Covered in this areas</p>
        </div>
        <div className="serviees-card">
            {services.map(item =>(
                   <div className="main-service-cards" key={item.id}>
                   <div className="round-icon">
                   <span >{item.icon}</span>
                   </div>
                   <div className="card-text">
                       <h4>{item.name}</h4>
                       <p>{item.description}</p>
                        <a href="/"><p>Read more</p></a>
                   </div>
               </div>
            ))}
        </div>
      </div>
    </div>
  )
}
