import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Mealdb.css'

const Mealdb = () => {
    const [meals, setmeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setmeals(data.meals))
    }, [])

    return (
        <div className='mealdb'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
            <div className='cart-container'>
                <h4 className='cart'>Order Summary</h4>
            </div>
        </div>
    );
};





export default Mealdb;