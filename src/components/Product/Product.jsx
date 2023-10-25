 import React from 'react';
 import './Product.css'
 
 const Product = ({product}) => {
    const {name,img,seller,price,ratting}=product;

    return (
        <div className='product'>
            <img src={img} alt="product name" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <small>Seller: {seller}</small> 
                
               <p> <small>Ratting: {ratting}</small> </p>
              
            </div>
            <button className='btn-card'>Add To Card</button>
        </div>
    );
 };
 
 export default Product;