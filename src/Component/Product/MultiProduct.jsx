import React, { useState,useEffect } from 'react'
import '../Product/ProductStyle.css'
import {FaShoppingCart} from 'react-icons/fa'
import {GrFormPreviousLink,GrFormNextLink} from 'react-icons/gr'
import { productsData } from '../Data/Data'
import { useMyContext } from '../../Context'
import ReactPaginate from 'react-paginate'
import CustomAlert from './CustomAlert'
export default function MultiProducts() {
                                   //----------------------usestate for state management
  const [showAlert, setShowAlert] = useState(false);
  const {cart, setCart} = useMyContext();
                      //-----------------functionality for pop up timeout when ever product is add to the cart
   useEffect(()=>{
    if(showAlert){
    const Timer = setTimeout(()=>{
      setShowAlert(false)
    },1000)
  return () => clearTimeout(Timer);
  }
   }, [showAlert])
  const [selectedProduct, setSelectedProduct] = useState('all')

            // ---------------------add to cart funtionality
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
                           //---------------product into categorization
  const handleCategoryChange = (category) => {
      setSelectedProduct(category)
      setCurrentPage(0)
  };
  const filterProduct = selectedProduct === 'all' ? productsData : productsData.filter(item=>item.category === selectedProduct)
                               //------------pagination functionality
  const [currentPage, setCurrentPage] = useState(0)
  const productPerPage = 6;
  const offset = currentPage * productPerPage;
  const currentProduct = filterProduct.slice(offset, offset + productPerPage);
  const changePage = ({selected}) =>{
      setCurrentPage(selected);
  };
  return (
    <div id='/product' className='products'>
             <div className="container">
        <div className="main-product-heading">
            <h2>OUR  PRODUCTS</h2>
        </div>
        <div className="multi-products">
            <div className="filter-section">
                <div className="category">
                    <h2>Product Categories</h2>
                <div className="categ-item">
                    <button onClick={() => handleCategoryChange('all')}><p>All</p> <p>(16)</p></button>
                    <button onClick={() => handleCategoryChange('Pastries')}><p>Pastries</p> <p>(3)</p></button>
                    <button onClick={() => handleCategoryChange('Muffin')}><p>Muffins</p> <p>(3)</p></button>
                    <button onClick={() => handleCategoryChange('cake')}><p>Cakes</p> <p>(4)</p></button>
                    <button onClick={() => handleCategoryChange('cookies')}><p>Cookies</p> <p>(4)</p></button>
                    <button onClick={() => handleCategoryChange('Bread')}><p>Bread</p> <p>(6)</p></button>
                </div>
                </div>
               </div>
        <div className="product-card">
          {/* {productData.map(items=>(      it first map on productData  */}
                                                       { /* then productData become filterProduct in upper Code of filterProduct */}
          {/* {filterProduct.map(items=>(  
                           */}
          {currentProduct.map(items=>(                
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
               <ReactPaginate                            /* ------------React pagination --------*/
               pageCount={Math.ceil(filterProduct.length / productPerPage)}
               previousLabel={<GrFormPreviousLink/>}
               nextLabel={<GrFormNextLink/>}
               onPageChange={changePage}
               containerClassName={'paginationBtn'}
               previousLinkClassName={'PreviousBtn'}
               nextLinkClassName={'NextBtn'}
               activeClassName={'activePage'}
               />
               </div>
                                      {/* cusom pop up when ever product is added to the cart  */}
               {showAlert && <CustomAlert message={'Product is added to the Cart'} />}
    </div>
  )
}
