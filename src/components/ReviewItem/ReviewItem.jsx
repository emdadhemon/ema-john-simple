import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./ReviewItem.css";
const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <h3>{name}</h3>
                <p>Price: $<span className='orange-text'>{price*quantity}</span></p>
                <p>Quantity:<span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className=''><FontAwesomeIcon className='font-trash' icon={faTrash}/></button>
        </div>
    );
};

export default ReviewItem;