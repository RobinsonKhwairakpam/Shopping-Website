// import axios from "axios";

const fetchProducts = async () => {    
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()                       
    return data                          
}                               

export default fetchProducts