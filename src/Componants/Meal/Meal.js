import React from 'react';
import './Meal.css'


const Meal = (props) => {
    console.log(props.meal);
    const { strMeal, strCategory, strArea, strMealThumb } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Catagory: {strCategory}</p>
            <p>Type: {strArea}</p>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default Meal;