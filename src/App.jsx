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
          <Route path="/ibm-react-final-project/" element={<HomePage />} />
          <Route path="/ibm-react-final-project/products" element={<ProductsPage />} />
          <Route path="/ibm-react-final-project/cart" element={<CartPage />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
