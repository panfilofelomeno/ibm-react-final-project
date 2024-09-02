import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header>
      <h1>Houseplant Store</h1>
      <nav>
        <Link to="/ibm-react-final-project/products">Products</Link>
        <Link to="/ibm-react-final-project/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
