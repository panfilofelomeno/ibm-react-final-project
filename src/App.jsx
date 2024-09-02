import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
