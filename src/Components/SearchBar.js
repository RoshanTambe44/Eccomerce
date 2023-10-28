import "./SearchBar.css"
import { useState } from "react"
import ProCard from "./ProCard";



export default function SearchBar(){
    const [input, SetInput] = useState("");
    
    const handler = (event) => { 

        SetInput(event.target.value)

            
        
        
     }

     
     



        



    return <div>
        <input type="text" value={input} onChange={handler} className="searchbar-input" placeholder="Enter your Product Name "/>
        <button className="search-btn" >Search</button>
        <ProCard search={input}/>
        
    </div>
}