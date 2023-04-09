import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping =0;
    let quantity =0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity = 1;  
        }
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping ;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax ;

    return (
        <div className='cart'>
            <h4 className='cart-title'>Order Summary</h4>
                <div className='cart-details'>
                    <p>Selected Items : {quantity}</p>
                    <p>Total Price : ${totalPrice}</p> 
                    <p>Total Shipping Charge : ${totalShipping}</p>
                    <p>Tax : ${tax.toFixed(2)}</p>
                    <h3 className='grand-total'>Grand total : ${grandTotal.toFixed(2)}</h3> 
                </div>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faShoppingCart}/> </button> 
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight}/> </button>
        </div>
    );
};

export default Cart;