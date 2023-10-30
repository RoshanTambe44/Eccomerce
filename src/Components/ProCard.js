import { useState, useEffect } from "react"
import axios from "axios"
import "./ProCard.css"
import "./SearchBar.css"


const ProCard = (props) => {


  const [data, Setdata] = useState([]);
  const [Record, SetRecord] = useState([]);
  // const [title, Settitle] = useState();
  // const [image, Setimgae] = useState();
  // const [discription, Setdiscription] = useState();
  // const [price, Setprice] = useState();


  //for input fild
 
    
  const handler = (event) => { 

     
      SetRecord( data.filter(f => f.title.toLowerCase().includes(event.target.value)))
      // console.log(Record)
          
      
      
   }
//-----------------------------------------------



  
//   const filter = (search) => {
//       var filterdata = data.filter(f => f.title.toLowerCase().includes(search))
//       console.log(filterdata)
//       SetRecord(filterdata)
      
//       var data1=filterdata.map((user1) => (user1.title )  )
//       console.log(data1) 

    
//   }
// filter(search)
  

  
//   async function checkproduct () {
    
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     Setdata(data)
   
    
//  } 
//  checkproduct()  

 
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then(res=> {
    Setdata(res.data);
    SetRecord(res.data);
  })
  .catch(err=> console.log(err));

},[])
 




    return (  <div className="main-back">
              <div className=" input-div"><input type="text"  onChange={handler} className="searchbar-input" placeholder="Enter your Product Name "/></div>
              <div className="main-card">{
                      Record.map((user)=>(      
                    <div className="card width-20" id="card2" >
                        <img src= {user.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{user.title}</h5>
                          <p className="card-text"> {user.description} </p>
                          <p className="btn btn-primary" id="btn">${user.price}</p>
                          
                        </div>
                    </div>
              ))}
            </div>
            </div>
            ) 
}

export default ProCard