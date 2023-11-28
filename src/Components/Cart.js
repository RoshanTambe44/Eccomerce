import "./Cart.css"

const cart = ({cutCartHandler, cartProduct}) => {


    

    return (    <div className="cart-main">
                    <div className="cart-header">
                    <div className="cart-title">CART PRODUCTS</div> <div className="cart-cross" onClick={cutCartHandler}>X</div>    
                    </div>
                    
                    <div className="cart-products">
                            <div className="all-products">                   
                                {cartProduct.map((product) => (<div className="cart-product-card">
                                    <img className="product-img" src={product.image}  style={{width:"150px", height:"150px"}} alt="..."/>
                                    <h5 className="right-product-title">{product.title}</h5>
                                    <button className="right-product-price" >{product.price}</button><br/>
                                    <input  min="1" className="right-product-input"   type="number"/><br/>
                                    <button className="decrease-btn">-</button>
                                    <button className="increase-btn">+</button>
                                </div>))}
                                
                            </div>   
                            <div className="buy-all-products"></div>
                    </div>
                </div> );
}
 
export default cart;