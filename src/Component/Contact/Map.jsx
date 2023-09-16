import React from 'react'
import '../Contact/ContactStyle.css'
export default function Map() {
  return (
    <div className='map-location'>
       <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.6986654006564!2d-115.23309262512166!3d36.19820970140384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1cc201faf59%3A0x79435198ff20b4c9!2sBravo%20St%2C%20Las%20Vegas%2C%20NV%2089108%2C%20USA!5e0!3m2!1sen!2s!4v1694518635369!5m2!1sen!2s"
       width="100%" height="500" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
