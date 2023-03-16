import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] =useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    const handdleAddToCart =(product) =>{
        console.log(product);
       const newCart =[...cart, product];
       setCart(newCart);
    };
    return (
        <div className='shop_container'> 
            <div className="product_container">
                <div className="shop_text">
                    <h1>This is product {products.length}</h1>
                </div>
               <div className="ptroduc">
                    {
                     products.map(product=> <Product 
                     key={product.id}
                    product={product}
                    handdleAddToCart={handdleAddToCart}></Product>)
                    }
               </div>
            </div>
            <div className="cart_contaioner">
                
                    <h1> This is cart</h1>
                
                <p>Add a product: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;