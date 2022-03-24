import React from 'react';
import './Meal.css'


const Meal = (props) => {

    const { strMeal, strCategory, strArea, strMealThumb } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Catagory: {strCategory}</p>
            <p>Type: {strArea}</p>
            <button onClick={() => props.carthandler(strMeal)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Meal;