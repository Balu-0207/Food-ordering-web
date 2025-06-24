import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './MainPage.css';

const MainPage = () => {
  const { user } = useAuth();

  return (
    <div className="main-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand">Foodify</span>
          </h1>
          <p className="hero-subtitle">
            Discover and order the best dishes from around the world
          </p>
          <div className="hero-buttons">
            {user ? (
              <Link to="/home" className="cta-button primary">
                Start Ordering
              </Link>
            ) : (
              <>
                <Link to="/login" className="cta-button primary">
                  Login
                </Link>
                <Link to="/signup" className="cta-button secondary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="hero-image">
          <div className="food-illustration">
            🍕 🍔 🍜 🍣
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Foodify?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Get your favorite meals delivered to your doorstep in no time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Cuisine</h3>
            <p>Explore dishes from different cultures and cuisines</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment options for your orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 