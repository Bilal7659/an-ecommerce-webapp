import React, { useEffect, useState } from 'react'
import '../Product/ProductStyle.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {FaShoppingCart} from 'react-icons/fa'
import { productsData } from '../Data/Data'
import { useMyContext } from '../../Context'
import CustomAlert from './CustomAlert'
import { NavLink } from 'react-router-dom'
export default function Product() {
  const [showAlert, setShowAlert] = useState(false);
                      //-----------------functionality for pop up timeout when ever product is add to the cart
  useEffect(()=>{
        if(showAlert){
          const Timer = setTimeout(()=>{
            setShowAlert(false)
          },1000)
          return () => clearTimeout(Timer);
        }
  },[showAlert])
                      //----------------------add to cart functionality
  const {cart, setCart} = useMyContext();
    function addToCart(item) {
        const updatecart = [...cart];
        const existingProduct = updatecart.find(cartItem=>cartItem.id === item.id)
        if(existingProduct){
          existingProduct.quantity += 1;
        }
        else{
          item.quantity = 1;
          updatecart.push(item)
        }
        setCart(updatecart);
        setShowAlert(true)
      }
    
                    //---------------------- feature Product
   const featureProducts = productsData.filter(product=> product.isFeature)    
  return (
    <div id='/product' className='products'>
             <div className="container">
        <div className="product-heading">
            <h2>OUR POPULAR BAKERY PRODUCTS</h2>
            <p>Check some of our best products and feel the great passion for food</p>
        </div>
        <div className="product-card">
          {featureProducts.map(items=>(
                     <div className="cards" key={items.id}>
                     <div className="card-image">
                       <img src={items.image} alt="" />
                     </div>
                       <div className="card-content">
                           <h5>{items.name}</h5>
                            <button title='Add to Cart'  onClick={() => addToCart(items)} className='p-btns'><span><FaShoppingCart className='cart-bt-icon'/></span></button>
                                <h3>${items.price}</h3>
                    </div>
                     </div>
          ))}
     
               </div>
               </div>
                                      {/* cusom pop up when ever product is added to the cart  */}
               {showAlert && <CustomAlert message={'Product is added to the Cart'}/>}
    </div>
  )
}
