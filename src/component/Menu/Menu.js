import React from 'react';
import './Menu.css';
const Menu = () => {
    return (
        <div className='link'>
            <a href="/shop">Home</a>
            <a href="/product">Product</a>
            <a href="/service">Service</a>
            <a href="/aboutus">About us</a>
            <a href="/contactus">Coutact us</a>
        </div>
    );
};

export default Menu;