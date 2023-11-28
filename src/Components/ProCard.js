import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import "./ProCard.css"



const ProCard = ({prodiv, setProdiv, cutHandler, setProRight, proRight, setCartProduct}) => {


  const [data, Setdata] = useState([]);
  const [Record, SetRecord] = useState([]);
  const [product, setProduct ] = useState([{image:"", title: "", price:"" }]);
 const [qty, setQty] = useState();
 const [title, setTitle] = useState();
 const [discription, setDiscription] = useState();
 const [price, setPrice] = useState();
 const [image, setImage] = useState();
 const [qty123, setQty123] = useState(1);
 const { isAuthenticated } = useAuth0();

 
 




  //for input fild
 
    
  const handler = (event) => { 
      SetRecord( data.filter(f => f.title.toLowerCase().includes(event.target.value)))
   }



 
// -----------------------------------------------





 
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then(res=> {
    Setdata(res.data);
    SetRecord(res.data);
    
  })
  .catch(err=> console.log(err));

},[])
 


//handel products --------------------------------------------



const productHandler = (e) => {
setProduct(Record.filter(records => records.title.includes(e.target.innerText)))
setQty(product[0].price )
setQty123(1)
setProRight(false)
setProdiv(true)
}




function qtyAdd(e){
 setQty123(e.target.value)
  setQty( parseInt(e.target.value, 10) || 1 ) 
  menualQty(e.target.value)
  
}

function menualQty (qtyValue ) {
  setQty (product[0].price * qtyValue) 
}

const increaseQuantity = () =>{
 setQty(qty + product[0].price);
 setQty123(Number(qty123) + 1);
}

const decreaseQuantity = () =>{
  if (qty > 1) {
    setQty(qty - product[0].price);
    setQty123(Number(qty123) - 1 );
  }
}

const upadateTitle = (e) => {
    setTitle(e.target.value)

}

const upadateDiscription = (e) => {
  setDiscription(e.target.value)
}

const upadatePrice = (e) => {
  setPrice(e.target.value)

}

const upadateImage = (e) => {
  setImage(e.target.value)
  
}

const addHandler = (e) => {
    e.preventDefault();
    let newProducts = {
      id : Record.length+1,
      title : title,
      price : Number(price),
      description : discription,
      image : image
      
    }
    SetRecord((data)=>[...data, newProducts] )
    setTitle("")
    setDiscription("")
    setPrice("")
    setImage("")
    
    
    
    
}


const cartHandler = () => {
    
  setCartProduct((prevProducts) => {
    const updatedProducts = Array.isArray(prevProducts) ? [...prevProducts, ...product] : [...product];
    return updatedProducts;
  });
  // setCartProduct((prevProducts) => [...prevProducts, ...product]);
  
  
}



    return (<div className="product-main">
              <div className="main-back">
                
                <div className="main-card">{
                        Record.map((user)=>(   
                      <div className="card width-20" id="card2"  style={{cursor:"pointer"}} >
                          <img src= {user.image} className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title" onClick={productHandler}>{user.title}</h5>
                            <p className="card-text"> {user.description} </p>
                            <button className="btn btn-primary" id="btn" >${user.price}</button>
                            
                          </div>
                      </div>
                    
                  ))}
                </div>
                            
                <div className= "input-div"><input type="text"  onChange={handler} className="searchbar-input" placeholder="Enter your Product Name "/>
                { proRight === true ? "" : <>{isAuthenticated && <div className="product-div">
                        <img className="product-img" src= {product[0].image}  alt="..."/>
                        <h5 className="right-product-title" >{product[0].title}</h5>
                        <button className="right-product-price" >${Math.round(qty)}</button><br/>
                        <input onChange={qtyAdd} min="1" className="right-product-input" defaultValue={qty123} value={qty123} type="number"/><br/>
                        <button onClick={decreaseQuantity} className="decrease-btn">-</button>
                        <button onClick={increaseQuantity} className="increase-btn">+</button>
                        <button className="btn btn-primary right-product-add" id="btn" onClick={cartHandler}>Add To Cart</button><button className="btn btn-primary right-product-buy" id="btn">Buy</button>
                      </div> }</>}
                     { prodiv === true ? " " : <div className="product-add">
                      <div className="cross-main" ><div className="cross" onClick={cutHandler}>X</div></div>
                      <div><input type="text" onChange={upadateTitle}  value={title} placeholder="Enter Title"/></div>
                      <div><input type="text" onChange={upadateDiscription} value={discription} placeholder="Enter Discription"/></div>
                      <div><input type="number" onChange={upadatePrice} value={price} placeholder="Enter price in USD"/></div>
                      <div><h6 style={{marginLeft: "5px"}}>Add Product Image</h6><input type="file" onChange={upadateImage} value={image} placeholder="Add Product Image"/></div>
                      <div className="add-btn"><button className="btn btn-outline-success" onClick={addHandler}>Add</button></div>

                     </div> }                  

                </div>
              </div>
            </div>  
            ) 
}

export default ProCard