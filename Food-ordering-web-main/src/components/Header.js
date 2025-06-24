// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useAuth } from '../AuthContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">Foodify</Link>
      </div>
      <nav className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="navbar-cart">
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">👤 {user.name}</span>
            <button className="navbar-logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="navbar-login-btn">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
