import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'


const Shop = () => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                      
                      >
                      </Product>)
                }
            </div>
             <div className="card-container">
                <h4>Order Summary</h4>
             </div>
            
        </div>
    );
};

export default Shop;