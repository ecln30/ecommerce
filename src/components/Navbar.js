













import React from 'react';
// <img src={images['doggy.png']} />
function Navbar({cart,avatar,category, EmptyCart}){

   
    return ( 
        <nav>
          <div className="category" onClick={category}>
          <h1>sneakers</h1>
          <p>Collections</p> 
          <p>Man</p> 
          <p>Woman</p> 
          <p>About</p> 
          <p>Contact</p>
          </div>
          <div className="imgBox">

          <img  className="cart" src={cart} onClick={EmptyCart} alt="" /> 
          <img className="avatar" src={avatar} alt="" />
          </div>
        </nav>
     );
}

export default Navbar;



























