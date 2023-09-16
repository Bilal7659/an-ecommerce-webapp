import React, { useState } from 'react'
import '../SpecialOffer/OfferStyle.css'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
export default function SpecilOffer() {
  const products = [
    {
      id: 1,
      name: 'MAPLE OAT MUFFIN',
      price: 3.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet commodo nulla facilisi nullam vehicula ipsum. Sagittis eu volutpat odio facilisis. Leo a diam sollicitudin tempor id eu nisl nunc. Habitasse platea dictumst quisque sagittis purus sit amet. Diam quam nulla porttitor massa id neque. Risus in hendrerit gravida rutrum quisque. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Condimentum id venenatis a condimentum vitae. Diam ut venenatis tellus in metus vulputate eu. Nisi porta lorem mollis aliquam ut. Ut etiam sit amet nisl purus in mollis nunc sed.',
      image: './Images/muffin-4.jpg',
    },
    {
      id: 2,
      name: 'BLUEBERRY DANISH',
      price: 2.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet commodo nulla facilisi nullam vehicula ipsum. Sagittis eu volutpat odio facilisis. Leo a diam sollicitudin tempor id eu nisl nunc. Habitasse platea dictumst quisque sagittis purus sit amet. Diam quam nulla porttitor massa id neque. Risus in hendrerit gravida rutrum quisque. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Condimentum id venenatis a condimentum vitae. Diam ut venenatis tellus in metuspurus in mollis nunc sed.',
      image: './Images/danish-2.jpg',
    },
    {
        id: 3,
        name: 'RAISIN BRAN MUFFIN',
        price: 1.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet commodo nulla facilisi nullam vehicula ipsum. Sagittis eu volutpat odio facilisis. Leo a diam sollicitudin tempor id eu nisl nunc. Habitasse platea dictumst quisque sagittis purus sit amet. Diam quam nulla porttitor massa id neque. Risus in hendrerit gravida rutrum quisque. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Condimentum id venenatis a condimentum vitae. Diam ut venenatis tellus in metus',
        image: './Images/muffin-1.jpg',
      },
    // Add more products...
  ]; 
const [selectedProduct, setSelectedProduct]  = useState(products[0]);
  const giveOfferProduct = (product) => {
    // console.log('hi');
        setSelectedProduct(product);
  }
  return (
    <div className='special-offer' id='special-offer'>
        <div className="container">
      <div className="offer-top">
      <div className="offer-heading">
            <h2>OUR MONTHLY SPECIAL OFFER</h2>
            <p>We offer something different to local and foreign patrons
                and ensure you enjoy a memorable food experience every time. Ends in:</p>
        </div>
        <div className="timer">
            <div className="time">
                <p className='time-tag'>0 0</p>
                <p className='title-tag'>Hours</p>
            </div>
            <div className="time">
                <p className='time-tag'>0 0</p>
                <p className='title-tag'>Minute</p>
            </div>
            <div className="time">
                <p className='time-tag'>0 0</p>
                <p className='title-tag'>Second</p>
            </div>
        </div>
      </div>
      <div className="offer-bottom">
             <div className="offer-left">
              <ProductList products={products} onItemClick={giveOfferProduct} selectedProducts={selectedProduct}/>
             </div>
             <div className="offer-right">
           <ProductDetails product={selectedProduct} />
             </div>
      </div>
      </div>
    </div>
  )
}
