import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, quantity, key} = props.product;
    const removeHandler = props.removeHandler;
    return (
        <div className="product">
            <div>
                <h2 className="product-name">{name}</h2>
                <p>{quantity}</p>
                <p>{seller}</p>
                <p>{price}</p>
                <button onClick={() => removeHandler(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;