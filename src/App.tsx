import React from 'react';
import ProductListPage from './pages/ProductListPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <ProductListPage />
    </CartProvider>
  );
}

export default App;