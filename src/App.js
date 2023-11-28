import Navbar from "./Components/Navbar";
import ProCard from "./Components/ProCard";
import Cart from "./Components/Cart";
import "./App.css";
import { useState } from "react";

const App = () =>{
    const[prodiv, setProdiv ] = useState(true);
    const [proRight, setProRight] = useState(true);
  const [cartProduct, setCartProduct ] = useState(0);
  const [cartState, setCartState ] = useState(true);
  



    
    
function cartHandler (){

  setCartState(false)
  console.log(cartProduct)
}

  function cutCartHandler (){
    setCartState(true)
    setProRight(true)
  }

    function productHandlerNav(e){
        e.preventDefault();
        setProdiv(false); 
        setProRight(true) 
    }

    function cutHandler(){
        setProdiv(true) 
        setProRight(false)
    }
    

    return <div>
                {cartState === true ? <><Navbar productHandlerNav={productHandlerNav} cartProduct={cartProduct} cartHandler={cartHandler} />
                <ProCard prodiv={prodiv} setProdiv={setProdiv} cutHandler={cutHandler} setProRight={setProRight} proRight={proRight} setCartProduct={setCartProduct}  /> </>:
                <Cart cutCartHandler={cutCartHandler} cartProduct={cartProduct}/>}
            </div>
}

export default App