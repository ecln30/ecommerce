










import React from 'react';


function Slider({close,next, shoe, isActive, closeImg,Next, Last, previous}) {

    return ( 
        
        <div className="slider" style={ isActive ? {display: "block"} : {display: "none"} } >
             <img className="close" onClick={closeImg} src={close} alt="" />
             <img className='slide-shoe' src={shoe} alt="" />
           <div className="show-box">
             <div className="arrowbox-left">
             <img class="left-Arrow" onClick={Last} src={previous} alt="" />
             </div>
          
             <div className="arrowbox-right">
             <img class="right-Arrow" onClick={Next} src={next} alt="" />
             </div>
           </div>
        </div>
     );
}

export default Slider




