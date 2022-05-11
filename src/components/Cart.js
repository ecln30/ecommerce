













import React from 'react';


function Cart({addCart, item}) {
    return ( 
        <div className="empty-cart">
         <div className="head">
          <h2>Cart</h2>  
         </div>
          <hr className="crossBar" />
         <div className="empty-cart-body">
            { 
               item.count > 0 ? (  
               <div className="cart-body">
               <div className="card-info">
                  <img  className="card-img" src={item.img[0]} alt="" />
                  <div className="productInfo">
                     {item.name} <br />
                    ${item.price} x {item.count} ${item.price * item.count}.00
                  <img className="cart-del" src={item.img[1]} alt="" />
               </div>
               <button className="checkout">Checkout</button>
            </div>
            </div>
               )
               : <p>Your cart is empty.</p>
            }
         </div>
        </div>
   );
}

export default Cart;














