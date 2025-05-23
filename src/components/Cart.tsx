import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
