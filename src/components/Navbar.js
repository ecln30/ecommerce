













import React from 'react';
function Navbar({cart,avatar,category, toggleCart, addCart, item, isActive, cmdEnter, cmdLeave, cmdClick
}){

   
    return ( 
        <nav>
          <div className="category" >
          <h1>sneakers</h1>
          <p  
          onClick={cmdClick} 
          onMouseEnter={cmdEnter}
          onMouseLeave={cmdLeave}
          >Collections</p> 
          <p   
          onClick={cmdClick}  
          onMouseEnter={cmdEnter}
          onMouseLeave={cmdLeave}
          >Man</p> 
          <p 
          onClick={cmdClick}    
          onMouseEnter={cmdEnter}
          onMouseLeave={cmdLeave}
          >Woman</p> 
          <p   
          onClick={cmdClick}  
          onMouseEnter={cmdEnter}
          onMouseLeave={cmdLeave}
          >About</p> 
          <p   
          onClick={cmdClick}  
          onMouseEnter={cmdEnter}
          onMouseLeave={cmdLeave}
          >Contact</p>
          </div>
          <div className="imgBox">
           <div className="cart-img">
             <p className="amount"
             style={{
               visibility: isActive ? "visible" : "hidden"
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



























