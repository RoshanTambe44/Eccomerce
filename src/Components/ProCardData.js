import ProCard from "./ProCard"

export default function ProCardData(){


    async function checkproduct () {
    
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        
     }
        
     
     checkproduct()


    return (
                <ProCard></ProCard>
            ) 
}