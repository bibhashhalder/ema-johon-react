import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const {cart} =props;
    console.log(cart)
    let total =0;
    let shipping =0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity +product.quantity
        total = total +product.price*product.quantity;
        shipping = shipping +product.shipping*product.quantity;
    }
    const tax = (total*0.1).toFixed(2);
    const newTax = parseFloat(tax)
    const newTotal = total+newTax;
    const grandTotal = newTotal+ shipping
    return (
        <div className='cart'>
             <h1> This is cart</h1>
             <p>Add a product:  {quantity}</p>
             <p>Total price: $ {total}</p>
             <p>Total shipping:{shipping}</p>
             <p>Tax: {tax}</p>
             <h5>Grand Total: $ {grandTotal} </h5>
        </div>
    );
};

export default Cart;