import React from 'react'
import '../Contact/ContactStyle.css'
import {MdOutgoingMail} from 'react-icons/md'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFillTelephoneXFill} from 'react-icons/bs'
import Map from './Map'
export default function Area() {
   const areaData = [
        {
          id: 1,
          title: 'Hobokon',
          location: '95 Washangton street New jersey',
          phone: '245 4365 4323',
          gmail: 'hb@ourbakery.com'
        },
        {
            id: 2,
            title: 'Time Square ',
            location: 'Time Square NewYork 11986',
            phone: '631 204171',
            gmail: 'ny@ourbakery.com'
          },
          {
            id: 3,
            title: 'Morristown',
            location: '40 Market street New Jersey 11968',
            phone: '3949 3929 2344',
            gmail: 'mt@ourbakery.com'
          },
    ]
  return (
    <div className='location'>
      <div className="container">
        <div className="location-heading">
            <h2>Our locations</h2>
            <p>As your neighborhood bakery, we're always there.</p>
        </div>
        <div className="location-main-card">
        {areaData.map(item=>(
               <div className="location-cards" key={item.id}>
                <h3 style={{color:'#684f40'}}>{item.title}</h3>
                <p><span><FaMapMarkerAlt style={{ marginRight:'1rem',fontSize:'18px',color:'#fdb822'}}/></span>{item.location}</p>
                <p><span><BsFillTelephoneXFill style={{ marginRight:'1rem',fontSize:'18px',color:'#fdb822'}}/></span>{item.phone}</p>
                <p><span><MdOutgoingMail style={{ marginRight:'1rem',fontSize:'22px',color:'#fdb822'}}/></span>{item.gmail}</p>
              </div>
        ))}
       </div>
        </div>
       <Map/>
    </div>
  )
}
