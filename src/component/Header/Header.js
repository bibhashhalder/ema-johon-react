import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import Menu from '../Menu/Menu';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <Menu></Menu>
        </nav>
    );
};

export default Header;