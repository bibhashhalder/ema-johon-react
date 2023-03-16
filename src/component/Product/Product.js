import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, category, price, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="title">
            <h4> {name}</h4>
            <p>Seller:{seller}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            </div>
            <button className='btn'>
                <span>add to cart</span>
            </button>
        </div>
    );
};

export default Product;