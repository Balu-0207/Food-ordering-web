// src/pages/CategoriesPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoriesPage.css'; // Create a CategoriesPage.css file for specific styles

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="categories-page">
      <h2>Meal Categories</h2>
      <div className="categories-list">
        {categories.map(category => (
          <div key={category.idCategory} className="category-item">
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
