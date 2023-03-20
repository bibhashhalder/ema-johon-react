import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
        const storedCard = getStoredCard();
        const saveCard =[];
        for(const id in storedCard){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity =storedCard[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);  
            }  
        }
        setCart(saveCard);
    }, [products])
    const handdleAddToCart =(selectedProduct) =>{
        let newCart =[];
        const exists = cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart =[...cart, selectedProduct];
        }
        else{
          const rest =cart.filter(product=>product.id!==selectedProduct.id);
          exists.quantity =exists.quantity + 1;
          newCart =[...rest, exists];
        }
       
       setCart(newCart);
       addToDb(selectedProduct.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;