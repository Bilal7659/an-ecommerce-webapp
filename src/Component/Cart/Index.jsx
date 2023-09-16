import React from "react";
import "../Cart/Cart.css";
import { NavLink } from "react-router-dom";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import Footer from "../Footer/Footer";
import { useMyContext } from "../../Context";
import { productsData } from "../Data/Data";
export default function Cart() {
  const { cart, setCart } = useMyContext();        // ---- from context.jsx
                      // ----------------remoming products 
  const removeItem = (product) => {
    const updateCart = cart.filter(item=> item.id !== product.id)
    setCart(updateCart);
  }
                 // -----------------Increasing product
  const increaseProduct = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const updatedItem = { ...item };
        updatedItem.quantity = (updatedItem.quantity || 0) + 1;
        return updatedItem;
      }
      return item;
    });
    setCart(updatedCart);
  };
                          //--------------Decreasing product
  const decreaseProduct = (product) => {
    const updateCart = cart
      .map((item) => {
        if (item.id === product.id) {
          const updatedItem = { ...item };
          updatedItem.quantity = (updatedItem.quantity || 0) - 1;
          return updatedItem;
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updateCart);
  };
                  // calculate total price
  const totalPrice = cart.reduce((tp, item) =>{
    return tp + (item.price * (item.quantity || 1))

  }, 0);
           // if cart is Empty
  const isCartEmpty = cart.length === 0;
  return (
    <div className="cart">
      <div className="cart-container">
      {isCartEmpty ? '' : 

        <div className="cart-top">
          <p>Your Cart</p>
          <NavLink to="/product">Continue Shoping</NavLink>
        </div>}

        {isCartEmpty ? (<div className="empty-cart">
          <p>Your Cart Is Empty</p>
          <NavLink to={'/product'}><button className="btn">Continue Shoping</button></NavLink>
        </div>
) : (
        cart.map(item => (
          <div className="main-cart" key={item.key}>
            <div className="cart-product">
              <img src={item.image} alt="" />
              <div className="details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
            </div>
            <div className="product-quantity">
              <div className="qunatity">
                <p>
                  <BiMinus
                    className="quantity-minus"
                    onClick={() => decreaseProduct(item)}
                  />
                </p>
                <p>{item.quantity}</p>
                <p className="quantity-plus">
                  <BiPlus onClick={() => increaseProduct(item)} />
                </p>
              </div>
              <MdDeleteSweep
                className="delate"
                onClick={() => removeItem(item)}
              />
            </div>
            <div className="product-total">
              <p>${item.price * (item.quantity || 1)}</p>
            </div>
          </div>
        ))
        )}
        {isCartEmpty ? '' :
          <div className="total-price">
          <p className="pera">Subtotal
                   <span className="price">${totalPrice.toFixed(2)}</span></p>
             <p>Taxes and <NavLink to={"/cart"}>shipping</NavLink> calculated at checkout</p>
             <button className="btn">Check Out</button>
          </div>  }
      </div>
      <Footer />
    </div>
  );
}
