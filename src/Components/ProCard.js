import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import "./ProCard.css"



const ProCard = ({prodiv, setProdiv, cutHandler, setProRight, proRight, setCartProduct, Record, SetRecord }) => {


  
  
  const [product, setProduct ] = useState([{image:"", title: "", price:"" ,qty: ""}]);
 const [qty, setQty] = useState();
 const [title, setTitle] = useState();
 const [discription, setDiscription] = useState();
 const [price, setPrice] = useState();
 const [image, setImage] = useState();
 const [qty123, setQty123] = useState(1);
 const { isAuthenticated } = useAuth0();

 
 
//  const products = [
//   {
//     id: 1,
//     title: 'Mascot Mens Polo Regular Half Sleeve Pocket T-Shirts',
//     description: 'Description for Product 1',
//     image: 'https://m.media-amazon.com/images/I/61QnUwai9tL._AC_UL320_.jpg',
//     price: 19.99
//   },
//   {
//     id: 2,
//     title: 'Van Heusen Mens Regular Fit Polo Shirt',
//     description: 'Description for Product 2',
//     image: 'https://m.media-amazon.com/images/I/71ISzvgAl2L._SX522_.jpg',
//     price: 29.99
//   },
//   {
//     id: 3,
//     title: 'Scott International Mens Rich Cotton Regular Fit Striper Polo T-Shirt',
//     description: 'Description for Product 3',
//     image: 'https://m.media-amazon.com/images/I/81K+dHwmrVL._SX569_.jpg',
//     price: 39.99
//   },
  
//   {
//     id: 4,
//     title: 'renge T-shirt',
//     description: 'Description for Product 20',
//     image: 'https://m.media-amazon.com/images/I/81QrOaD9-ZL._SX522_.jpg',
//     price: 49.99
//   }
// ];







  //for input fild
 
    

 
// -----------------------------------------------

//res.data
 

 


//handel products --------------------------------------------



const productHandler = (e) => {
setProduct(Record.filter(records => records.title.includes(e.target.innerText)))
setProRight(false)
setProdiv(true)
}

useEffect(() => {
  // This block will run after setProduct has updated the state
  if (product.length > 0) {
    setQty(product[0].price);
    setQty123(1);
  }
}, [product]);






function qtyAdd(e){
 setQty123(e.target.value)
  setQty( parseInt(e.target.value, 10) || 1 ) 
  menualQty(e.target.value)
  
}

function menualQty (qtyValue ) {
  setQty (product[0].price * qtyValue) 
}

const increaseQuantity = () =>{
 setQty(qty + Math.round(product[0].price));
 setQty123(Number(qty123) + 1);
}

const decreaseQuantity = () =>{
  if (qty > 1) {
    setQty(qty - Math.round(product[0].price));
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
    const UpProducts ={
      ...product, qty:qty123, subtotal:Math.round(qty)
    }

    const updatedProducts = Array.isArray(prevProducts) ? [...prevProducts, UpProducts] : [UpProducts];
    return updatedProducts;

  });
  
 
  
}



    return (<div className="product-main">
              <div className="main-back">
                
              { proRight === true  ? <div className="main-card" style={{width:"100%"}}>{
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
                </div> : <div className="main-card" style={isAuthenticated ? {width:"80%"}:{width:"100%"}} >{
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
                </div>}
                            
                { proRight === true  ? "" : <>{isAuthenticated && <div className= "input-div">
                        <div className="product-div">
                        <img className="product-img" src= {product[0].image}  alt="..."/>
                        <h5 className="right-product-title" >{product[0].title}</h5>
                        <button className="right-product-price"  >${Math.round(product[0].price)}</button><button className="updated-price" >subtotal : ${Math.round(qty)}</button><br/>
                        <input onChange={qtyAdd} min="1" className="right-product-input"  value={qty123} type="number"/><br/>
                        <button onClick={decreaseQuantity} className="decrease-btn">-</button>
                        <button onClick={increaseQuantity} className="increase-btn">+</button>
                        <button className="btn btn-primary right-product-add" id="btn" onClick={cartHandler}>Add To Cart</button><button className="btn btn-primary right-product-buy" id="btn">Buy</button>
                      </div></div>}</>}
                     { prodiv === true ? " " : <div className= "input-div">
                      <div className="product-add">
                      <div className="cross-main"  ><h1 style={{fontSize:"18px", marginLeft:"10px"}}>Add your Product</h1><div className="cross" onClick={cutHandler}>X</div></div>
                     
                      <div><input type="text" onChange={upadateTitle} style={{borderRadius:"8px", border:"1px solid black"}} value={title} placeholder="Enter Title"/></div>
                      <div><input type="text" onChange={upadateDiscription} style={{borderRadius:"8px" , border:"1px solid black"}} value={discription} placeholder="Enter Discription"/></div>
                      <div><input type="number" onChange={upadatePrice} style={{borderRadius:"8px", border:"1px solid black"}} value={price} placeholder="Enter price in USD"/></div>
                      <div><h6 style={{marginLeft: "5px"}}>Add Image URL</h6><input type="url" onChange={upadateImage} style={{borderRadius:"8px", border:"1px solid black"}} value={image} placeholder="Add Image URL"/></div>
                      <div className="add-btn"><button className="btn btn-outline-success" onClick={addHandler}>Add</button></div>
                     </div>
                     </div> }                  

                
              </div>
            </div>  
            ) 
}

export default ProCard