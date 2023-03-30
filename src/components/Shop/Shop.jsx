import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddtoCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4 className='cart-title'>Order Summary</h4>
                <div className='cart-details'>
                    <p>Selected Items : {cart.length}</p>
                    <p>Total Price :</p> 
                    <p>Total Shipping Charge :</p>
                    <p>Tax :</p>
                    <h3 className='grand-total'>Grand total :</h3> 
                </div>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faShoppingCart}/> </button> 
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight}/> </button>      
            </div>
        </div>
    );
};

export default Shop;