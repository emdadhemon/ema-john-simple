import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div>
            <h4 className='cart-title'>Order Summary</h4>
                <div className='cart-details'>
                    <p>Selected Items : {cart.length}</p>
                    <p>Total Price : {total}</p> 
                    <p>Total Shipping Charge :</p>
                    <p>Tax :</p>
                    <h3 className='grand-total'>Grand total :</h3> 
                </div>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faShoppingCart}/> </button> 
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight}/> </button>
        </div>
    );
};

export default Cart;