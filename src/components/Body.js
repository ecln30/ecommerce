













import React from 'react';


function Body({close ,menu ,minus ,next, plus,cart, 
    previous,product1 ,thumbnail1,product2 ,thumbnail2 
    ,product3,thumbnail3,productt4,thumbnail4 ,del}) {

    return (  
        <div className="container">
          <div className="product-img">
              <img className='zoom-shoe' src={product1} alt="" />
              <div className="shoe-flex">
                  <img className="shoe first" src={thumbnail1} alt="" />
                  <img className="shoe" src={thumbnail2} alt="" />
                  <img className="shoe" src={thumbnail3} alt="" />
                  <img className="shoe" src={thumbnail4} alt="" />
              </div>
          </div>
          <div className="product-info">
              <div className="description">
                 <div className='adv'>
                    
                     <h1 className="bigtitle"> <p className="title">SNEAKER COMPANY</p> Fall Limited Edition <br />Sneakers </h1></div> 
                
                 <p>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                 <h1>$125.00 <span className='percent'>50%</span></h1>
                 <h3>$250.00</h3>
                 <div className="cart-button">
                     <div className="count">
                         <img className='minus' src={minus} alt="" />
                         <p>0</p>
                         <img className='plus' src={plus} alt="" />
                     </div>
                     <div className='addtocart'><img src={cart} alt=""/><span className='text'>Add to cart</span></div>
                 </div>
              </div>
          </div>
        </div>
    );
}

export default Body;




























