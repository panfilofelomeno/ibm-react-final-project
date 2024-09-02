import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: 'repeater.jpg' }}>
      <h2>Welcome to Houseplant Store</h2>
      <p>Your go-to place for the best houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
