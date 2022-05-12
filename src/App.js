import './App.css'
import React from 'react';
import Navbar from "./components/Navbar"
import  cart from "./images/icon-cart.svg"
import  avatar from "./images/image-avatar.png"
import close from "./images/icon-close.svg"
import menu from "./images/icon-menu.svg"
import minus from "./images/icon-minus.svg"
import next from "./images/icon-next.svg"
import plus from "./images/icon-plus.svg"
import previous from "./images/icon-previous.svg"
import product1 from "./images/image-product-1.jpg"
import thumbnail1 from "./images/image-product-1-thumbnail.jpg"
import product2 from "./images/image-product-2.jpg"
import thumbnail2 from "./images/image-product-2-thumbnail.jpg"
import product3 from "./images/image-product-3.jpg"
import thumbnail3 from "./images/image-product-3-thumbnail.jpg"
import product4 from "./images/image-product-4.jpg"
import thumbnail4 from "./images/image-product-4-thumbnail.jpg"
import Cart from "./components/Cart"
import del from  "./images/icon-delete.svg"
import Body from "./components/Body"
import {useState, useEffect} from "react"
import Slider from "./components/Slider"


function App() {
  const [count, setCount] = useState(0)
  const [isHidden, setIsHidden] = useState(true)
  const [price, setPrice] = useState("125.00")
  const [name, setName] = useState("Fall Limited Edition Sneakers")
  const [img, setImg] = useState(thumbnail1)
  const [product, setProduct] = useState(product1)
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const [styles, setStyles] = useState({display: "none"})
  const[shoe,setShoe]= useState(product1)
  const [ item, setItem] = useState({
    name: name,
    count: count,
    price: price,
    total: price * count,
    img:[img, del]
  })


useEffect(() => {
  localStorage.setItem('num', JSON.stringify(count));
}, [count]);

useEffect( () => {
  const stored = localStorage.getItem("num");
  const initial = stored ? JSON.parse(stored) : 0;
   console.log(initial)
   setCount(initial)
}, [])


 function toggleCart(e) {
    console.log("from EmptyCart function")
      setIsHidden(item => item = !item)
      console.log(isHidden)
  }

  function handleCount(e) {
      const el = e.target
      if( el.matches(".minus")) {
         setCount(count - 1 )
         setItem(preItem => {
           return {...preItem, count: count - 1}
         })
      } else if(el.matches(".plus")) {
         setCount(count + 1)
         setItem(preItem => {
           return { ...preItem, count: count + 1 }
         })
      }
  }

  function handleImg(e) {
       let el = e.currentTarget
       if(el.src === thumbnail1) {
         setProduct(product1)
       } 
       else if(el.src === thumbnail2) {
         setProduct(product2)
       }
       else if(el.src === thumbnail3) {
         setProduct(product3)
       }
       else if(el.src === thumbnail4) {
         setProduct(product4)
       }
  }

  function addCart(){
    setIsShow(true)
  }

  function cmdEnter(e) {
      const el = e.currentTarget
      if(el.textContent === "Collections") {
         setStyles({left: "31.3%", width: 80})
      }
      else if(el.textContent === "Man" ) {
          setStyles({left:" 37%", width: 40  })
      }
      else if(el.textContent === "Woman" ) {
          setStyles({left: "41%", width: 50})
      }
      else if(el.textContent === "About" ) {
          setStyles({left: "45.3%", width: 50 })
      }
      else if(el.textContent === "Contact" ) {
         setStyles({left:"49.5%", width: 60})
      }
  }

  function cmdLeave(e) {
       const el = e.currentTarget
       if(el.textContent === "Collections") {
          setStyles({display: "none"})
       }
       else if(el.textContent === "Man" ) {
           setStyles({display: "none"})
       }
       else if(el.textContent === "Woman" ) {
           setStyles({display: "none"})
       }
       else if(el.textContent === "About" ) {
           setStyles({display: "none"})
       }
       else if(el.textContent === "Contact" ) {
          setStyles({display: "none"})
       }
  }

  function cmdClick(e) {
     
  }

  function ShoeClick() {
      setIsActive(true)
  }

  function closeImg() {
    setIsActive(false)
  }

  function Last(){
    if( shoe === product4) {
      setShoe(product3)
    }
    if( shoe === product3) {
      setShoe(product2)
    }
    if( shoe === product2) {
      setShoe(product1)
    }
    if( shoe === product1) {
      setShoe(product4)
    }
   
  }
  function Next(e) {
     
    if( shoe === product1) {
      setShoe(product2)
    }
    if( shoe === product2) {
      setShoe(product3)
    }
    if( shoe === product3) {
      setShoe(product4)
    }
    if( shoe === product4) {
      setShoe(product1)
    }
     
  }



  return (
    <main className="App">
      <Navbar cart={cart} avatar={avatar} toggleCart={toggleCart} addCart={addCart} isShow={isShow} item={item} cmdLeave={cmdLeave} cmdEnter={cmdEnter} 
      cmdClick={cmdClick}
      />
      <hr className="selectbar" style={styles} />
      <hr />
     { !isHidden && <Cart  item={item} />}
         { <Slider 
            close={close} 
            menu={menu} 
            next={next}
            Next={Next}
            Last={Last}
            isActive={isActive}
            closeImg={closeImg}
            shoe={shoe}
            previous={previous}
         />}
      <Body 
        close={close} 
        menu={menu} 
        next={next}
        minus={minus} 
        plus={plus} 
        previous={previous}
        thumbnail1={thumbnail1}
        thumbnail2={thumbnail2} 
        thumbnail3={thumbnail3}
        thumbnail4={thumbnail4}
        handleCount={handleCount}
        handleImg={handleImg}
        ShoeClick={ShoeClick}
        product={product}
        isActive={isActive}
        addCart={addCart}
        count={count}
        cart={cart}
        del={del}
      />

    </main>
  );
}

export default App;
