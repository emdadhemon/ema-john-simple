import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-price'>Price : ${price}</h6>
                <div className='product-other-details'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} star</p>
                </div>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/> </button>
        </div>
    );
};

export default Product;