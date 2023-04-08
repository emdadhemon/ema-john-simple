import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link><img src= {logo} alt="" /></Link>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/order_review">Order Review</Link>
                <Link to="/manage_inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;