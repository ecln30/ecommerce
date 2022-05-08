













import './App.css'
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
import del from  "./images/icon-delete.svg"
import Body from "./components/Body"


function App() {


  
  // <img src={images['doggy.png']} />
  return (
    <main className="App">
      <Navbar cart={cart} avatar={avatar} />
      <hr />
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
        cart={cart}
        del={del}
      />

    </main>
  );
}

export default App;
