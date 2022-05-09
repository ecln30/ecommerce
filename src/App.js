













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


function App() {
  const [count, setCount] = React.useState(0)
  const [isHidden, setIsHidden] = React.useState(true)
  const [price, setPrice] = React.useState("125.00")
  const [name, setName] = React.useState("Fall Limited Edition Sneakers")
  const [img, setImg] = React.useState("thumbnail1")
  const [ item, setItem] = React.useState({
     name: name,
     count: count,
     price: price,
     img: img 
  })
  function EmptyCart(e) {
    console.log("from EmptyCart function")
      setIsHidden(item => item = !item)
      console.log(isHidden)
  }

  function category(e){
      
      let text = e.target.textContent
      const el = e.target.parentNode
      console.log(text,el)
      if(text === "Collection"){
         el.classList.add("select-bar")
         el.style.position = "left: 200px"
      }
  }
  console.log(item)
  function handleCount(e) {
      const el = e.target
      console.log(el)
      if( el.matches(".minus")) {
         setCount( count > 0 ? count - 1 : 0 )
         setItem(preItem => {
            return {
               ...preItem, count: count
            }
         })
         console.log(item.count)
      } else if(el.matches(".plus")) {
         setCount(count + 1)
         setItem(preItem => {
           return {
             ...preItem, count: count
           }
         })
      }
  }

  function addCart() {
        console.log("this from add to cart")
       return Object.keys(item).map(item => {

        if(item.count !== 0) {
          <div>
            <card className="product-data">
            <img src={item.img} alt="" />
            <div className="info">
            <p>{item.name}</p>
             <p>{item.price}</p>
            </div>
            <i>{item.del}</i>
            </card>
            <button className="checkout-btn">
              Checkout
            </button>
          </div>
        } else {
           <p>Your Cart is empty.</p>
        }
       })

  }  
  
  return (
    <main className="App">
      <Navbar cart={cart} avatar={avatar} EmptyCart={EmptyCart} category={category} />
      
      <hr className="selectbar" />
      <hr />
     { !isHidden && <Cart addCart={addCart} item={item} />}
      <Body 
        close={close} 
        menu={menu} 
        next={next}
        minus={minus} 
        plus={plus} 
        previous={previous}
        product1={product1} 
        thumbnail1={thumbnail1}
        product2={product2}
        thumbnail2={thumbnail2} 
        product3={product3}
        thumbnail3={thumbnail3}
        product4={thumbnail4}
        thumbnail4={product4}
        handleCount={handleCount}
        addCart={addCart}
        item={item}
        cart={cart}
        del={del}
      />

    </main>
  );
}

export default App;
