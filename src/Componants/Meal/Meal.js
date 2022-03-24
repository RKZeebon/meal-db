import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {

    const { strMeal, strCategory, strArea, strMealThumb } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Catagory: {strCategory}</p>
            <p>Type: {strArea}</p>
            <button onClick={() => props.carthandler(strMeal)} className='btn'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add To Cart</button>
        </div>
    );
};

export default Meal;