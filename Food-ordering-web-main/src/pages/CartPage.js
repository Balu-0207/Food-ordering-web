import React from 'react';
import { useCart } from '../CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, total, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.idMeal} className="cart-item">
                  <td>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                  </td>
                  <td>
                    <div className="item-details">
                      <h4>{item.strMeal}</h4>
                    </div>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.idMeal)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => alert('Proceeding to checkout...')}>Checkout</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
