import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const {cart} =props
    let total =0;
    let shipping =0;
    for(const product of cart){
        total = total +product.price;
        shipping = shipping +product.shipping
    }
    const tax = (total*0.1).toFixed(2);
    const newTax = parseFloat(tax)
    const newTotal = total+newTax;
    const grandTotal = newTotal+ shipping
    return (
        <div className='cart'>
             <h1> This is cart</h1>
             <p>Add a product: $ {cart.length}</p>
             <p>Total price: $ {total}</p>
             <p>Total shipping:{shipping}</p>
             <p>Tax: {tax}</p>
             <h5>Grand Total: $ {grandTotal} </h5>
        </div>
    );
};

export default Cart;