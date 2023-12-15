import Navbar from "./Components/Navbar";
import ProCard from "./Components/ProCard";
import Cart from "./Components/Cart";
import "./App.css";
import { useState,useEffect } from "react";
import axios from "axios"

const App = () =>{
    const[prodiv, setProdiv ] = useState(true);
    const [proRight, setProRight] = useState(true);
  const [cartProduct, setCartProduct ] = useState([]);
  const [cartState, setCartState ] = useState(true);
  const [data, Setdata] = useState([]);
  const [Record, SetRecord] = useState([]);
  

  useEffect(()=>{

  
    axios.get("https://fakestoreapi.com/products")
    .then(res=> {
      Setdata(res.data);
      SetRecord(res.data);
      
    })
    .catch(err=> console.log(err.toJSON().message));
  
  },[])

  const handler = (event) => { 
    SetRecord( data.filter(f => f.title.toLowerCase().includes(event.target.value)))
    
 }    
    
function cartHandler (){
  setCartState(false)
  // setCartProduct(  )
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

    function cartProductHandler(id){
      
      setCartProduct(cartProduct.filter(cartProduct=>cartProduct[0].id !== id))
      
      
      

    }
    

    return <div>
                {cartState === true ? <><Navbar productHandlerNav={productHandlerNav} cartProduct={cartProduct} cartHandler={cartHandler} handler={handler} />
                <ProCard prodiv={prodiv} setProdiv={setProdiv} cutHandler={cutHandler} setProRight={setProRight} proRight={proRight} setCartProduct={setCartProduct} Record={Record} SetRecord={SetRecord} /> </>:
                <Cart cutCartHandler={cutCartHandler} cartProduct={cartProduct} cartProductHandler={cartProductHandler} setCartProduct={setCartProduct} />}
            </div>
}

export default App