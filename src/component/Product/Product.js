import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, category, price, seller} = props.product;
//    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="title">
            <h4> {name}</h4>
            <p>Seller:{seller}</p>
            <p>Category: {category}</p>
            <p>Price: $ {price}</p>
            </div>
            <button onClick={()=>props.handdleAddToCart(props.product)}  className='btn'>
                <span>add to cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;