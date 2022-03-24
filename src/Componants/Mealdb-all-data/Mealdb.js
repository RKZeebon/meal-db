import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Mealcart/Cart';
import './Mealdb.css'

const Mealdb = () => {
    const [meals, setmeals] = useState([])

    const [meal, setmeal] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setmeals(data.meals))
    }, [])

    const handleCart = (name) => setmeal(name)

    return (
        <div className='mealdb'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                        carthandler={handleCart}
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart name={meal}></Cart>
            </div>
        </div>
    );
};





export default Mealdb;