import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Product from "./Components/Product";
import Carousel from "./Components/Carousel";
import pro1 from "./Components/Images/pro1.jpg";
import pro2 from "./Components/Images/pro2.jpg";
import pro3 from "./Components/Images/pro3r.avif";
import pro4 from "./Components/Images/pro4.avif";
import pro5 from "./Components/Images/pro5.avif";
import thirdPage from "./Components/thirdPage";
import "./App.css";


const App = () =>{
    return <div><Navbar/>
                 <Carousel/>
                <span className="span-class"><Card img= {pro1} name="shoes"  price="500" />
                <Card img= {pro2} name=" vintage shoes"  price="545"/>
                <Card img= {pro3} name="shirt"  price="450"/>
                <Card img= {pro4} name="T-shirt"  price="551"/>
                <Card img= {pro5} name="T-shirt"  price="600"/></span>
                <Product/>
                <thirdPage/>
            </div>
}

export default App