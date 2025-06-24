// src/components/MealList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MealList.css';

const MealList = ({ meals }) => {
  return (
    <div className="meal-list-grid">
      {meals.map(meal => (
        <div key={meal.idMeal} className="meal-card">
          <Link to={`/meal/${meal.idMeal}`} className="meal-card-link">
            <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} className="meal-card-img" />
            <h3 className="meal-card-title">{meal.strMeal}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MealList;
