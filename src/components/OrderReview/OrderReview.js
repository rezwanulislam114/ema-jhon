import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const removeHandler = key => {
        const remainItems = cart.filter(product => product.key !== key);
        setCart(remainItems);
        deleteFromDb(key)
    }
    const placrOrderHandler = () => {
        history.push('/place-order');
        setCart([]);
        clearTheCart();
    }
    
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} removeHandler={removeHandler} product={product}></ReviewItem>)    
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placrOrderHandler} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;