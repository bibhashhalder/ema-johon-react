import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div className='shop_container'> 
            <div className="product_container">
                <h1>This is product {products.length}</h1>
                    {
                        products.map(product=> console.log(product))
                    }
               <div className="ptroduc">
                    {
                     products.map(product=> <Product 
                     key={product.id}
                    product={product}></Product>)
                    }
               </div>
            </div>
            <div className="cart_contaioner">
                <h1> This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;