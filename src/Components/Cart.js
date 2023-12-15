// import { useState } from "react"
import "./Cart.css"

const Cart = ({cutCartHandler, cartProduct, setCartProduct, cartProductHandler}) => {
    

    
   
  const totalQuantity = cartProduct.reduce((sum, product) => sum + product.qty, 0);
  const totalSubtotal = cartProduct.reduce((sum, product) => sum + product.subtotal, 0);

    

const increaseQuantity = (productId) => {
    setCartProduct((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product[0].id === productId ? { ...product, qty: product.qty + 1, subtotal : (product.qty + 1) * Math.round(product[0].price) } : product
      ));
      
    
  };
  
  const decreaseQuantity = (productId) => {
    setCartProduct((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product[0].id === productId && product.qty > 1
          ? { ...product, qty: product.qty - 1, subtotal : (product.qty - 1) * Math.round(product[0].price)}
          : product
      )
    );
  };

 
  
    

    return (    <div className="cart-main">
                    <div className="cart-header">
                    <div className="cart-title">CART PRODUCTS</div> <button className="cart-cross delete-button" onClick={cutCartHandler}>X</button>    
                    </div>
                    
                    <div className="cart-products">
                            <div className="all-products">                   
                                {cartProduct.map((product) => (<div className="cart-product-card">
                                     <div className="product-cross"><img className="product-img" src={product[0].image}  style={{width:"150px", height:"150px"}} alt="..."/><button className="delete-button" onClick={()=>cartProductHandler(product[0].id)}>X</button></div> 
                                    <h5 className="right-product-title">{product[0].title}</h5>
                                    <button className="right-product-price" >${Math.round(product[0].price)}</button><br/>
                                    <input  min="1" className="right-product-input"  value= {product.qty} type="number"/><br/>
                                    <div className="inc-dic-to"><div ><button className="decrease-btn" onClick={()=>decreaseQuantity(product[0].id)}>-</button>
                                    <button className="increase-btn" onClick={()=>increaseQuantity(product[0].id)}>+</button></div><div className="sub-total">Subtotal: ${Math.round(product.subtotal)}</div></div>
                                </div>))}
                                
                            </div>   
                            <div className="buy-all-products">
                                <div className="total">Subtotal ({totalQuantity} items):  ${totalSubtotal}</div>
                                <button className="buying-button"><span className="">Procced to Buy</span></button>
                            </div>
                    </div>
                </div> );
}
 
export default Cart;