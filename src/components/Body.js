import React from 'react'

function Body({minus ,plus,cart,thumbnail1,thumbnail2 ,thumbnail3,thumbnail4,handleCount, addCart, count,  product, handleImg, ShoeClick}) {

    return (  
        <div className="container">
          <div className="product-img">
            <img className='zoom-shoe' src={product} alt="" />
            <div className="shoe-flex" >
            <img className="shoe first" src={thumbnail1} 
              onClick={ShoeClick}
              onMouseEnter={handleImg}
            alt="" />
            <img  className="shoe"  src={thumbnail2}
               onClick={ShoeClick}
              onMouseEnter={handleImg}
            alt="" />
            <img  className="shoe"  src={thumbnail3}
               onClick={ShoeClick}
              onMouseEnter={handleImg }
            alt="" />
            <img  className="shoe "  src={thumbnail4} 
               onClick={ShoeClick}
              onMouseEnter={handleImg }
            alt="" />
        </div>
    </div>
          <div className="product-info">
              <div className="description">
                 <div className='adv'>
                    
                     <h1 className="bigtitle"> <p className="title">SNEAKER COMPANY</p> Fall Limited Edition <br />Sneakers </h1></div> 
                
                 <p>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                 <h1>$125.00<span className='percent'>50%</span></h1>
                 <h3 className="discount">$250.00</h3>
                 <div className="cart-button">
                     <div className="count" onClick={handleCount}>
                         <img className='minus' src={minus} alt="" />
                         {  count > 0 ? count : 0 }
                         <img className='plus' src={plus} alt="" />
                     </div>
                     <div className='addtocart' onClick={addCart}><img className="cartImg" src={cart} alt=""/><span className='text'>Add to cart</span>
                     </div>
                 </div>
              </div>
          </div>
        </div>
    );
}

export default Body;




























