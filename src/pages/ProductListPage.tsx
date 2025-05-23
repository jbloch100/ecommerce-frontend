import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const ProductListPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product List</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default ProductListPage;
