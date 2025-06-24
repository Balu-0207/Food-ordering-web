// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories || []);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-pro">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Recipe..."
        className="search-input-pro"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="search-category-pro"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat.idCategory} value={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
      <button type="submit" className="search-btn-pro">Search</button>
    </form>
  );
};

export default SearchBar;
