













import React from 'react';


function Cart({addCart, item}) {
    return ( 
        <div className="empty-cart">
         <div className="head">
          <h2>Cart</h2>  
         </div>
          <hr className="crossBar" />
         <div className="empty-cart-body">
            { addCart}
         </div>
        </div>
     );
}

export default Cart;














