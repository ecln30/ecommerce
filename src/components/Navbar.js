import React from 'react';
function Navbar({cart,avatar, toggleCart, menu, item, isShow, cmdEnter, cmdLeave, cmdClick
}){

   
    return ( 
        <nav>
          <div className="category" >
          <h1>sneakers</h1>
          <p  onMouseEnter={cmdEnter}
              onMouseLeave={cmdLeave}
          >Collections</p> 
          <p  onMouseEnter={cmdEnter}
              onMouseLeave={cmdLeave}
          >Man</p> 
          <p  onMouseEnter={cmdEnter}
              onMouseLeave={cmdLeave}
          >Woman</p> 
          <p  onMouseEnter={cmdEnter}
              onMouseLeave={cmdLeave}
          >About</p> 
          <p  onMouseEnter={cmdEnter}
              onMouseLeave={cmdLeave}
          >Contact</p>
          </div>
          <div className="imgBox">
           <div className="cart-img">
             <p className="amount"
             style={{
               visibility: isShow ? "visible" : "hidden"
             }}
             >{item.count}</p>
             <img  className="cart" src={cart} onClick={toggleCart} alt="" /> 
           </div>
          <img className="avatar" src={avatar} alt="" />
        </div>
        </nav>
     );
}

export default Navbar;



























