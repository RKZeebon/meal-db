import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div className='cart'>
            <h2>Selected Ittem: </h2><h3>{props.name}</h3>

        </div>
    );
};

export default Cart;