// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealList from '../components/MealList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = (query, category) => {
    if (category) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => {
          setMeals(response.data.meals || []);
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    } else {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => {
        setMeals(response.data.meals || []);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
    }
  };

  useEffect(() => {
    fetchMeals('', ''); // Fetch initial meals
  }, []);

  return (
    <div>
      <h2
        style={{
          fontWeight: 800,
          fontSize: '2.7rem',
          textAlign: 'center',
          color: '#4F46E5',
          margin: '60px 0 32px 0',
          fontFamily: "'Segoe UI', Arial, sans-serif",
          letterSpacing: '0.5px',
          lineHeight: 1.2,
          textShadow: '0 2px 12px rgba(79,70,229,0.08)'
        }}
      >
        Order food &amp; groceries.<br />
        <span style={{ color: '#10B981', fontWeight: 700, fontSize: '2.1rem', textShadow: '0 2px 12px rgba(16,185,129,0.10)' }}>
          Discover best Dishes around the world.
        </span>
      </h2>
      <SearchBar onSearch={fetchMeals} />
      <MealList meals={meals} />
    </div>
  );
};

export default HomePage;
