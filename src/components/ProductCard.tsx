import React from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '6px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      width: '200px'
    }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
