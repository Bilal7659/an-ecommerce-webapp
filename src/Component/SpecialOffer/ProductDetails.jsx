import React from 'react'
import '../SpecialOffer/OfferStyle.css'
import {FaShoppingCart} from 'react-icons/fa'
export default function ProductDetails({product}) {
  return (
    <div className='single-product'>
      <div className="product-content">
        <div className="product-detail">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
             <div className="priduct-price">
             <h1>${product.price}</h1>
             <a href="">Buy Now <span><FaShoppingCart/></span></a>
             </div>
        </div>
      </div>
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>
    </div>
  )
}
