import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const cartProducts = useLoaderData();
    const [cart, setCart] = useState(cartProducts);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cartProducts.map(product => <ReviewItem
                    key={cartProducts.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div>
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;