import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
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
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;