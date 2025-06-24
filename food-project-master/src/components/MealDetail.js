// src/components/MealDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import './MealDetail.css';

const MealDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
        const mealData = data.meals[0];
        mealData.price = Math.floor(Math.random() * 50) + 10; // Generate a random price for the meal
        setMeal(mealData);
      });
  }, [id]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div className="meal-detail">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong> {meal.strInstructions}</p>
      <p><strong>Price:</strong> ${meal.price}</p>
      <button onClick={() => addToCart(meal)}>Add to Cart</button>
      {meal.strYoutube && <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>}
    </div>
  );
};

export default MealDetail;
