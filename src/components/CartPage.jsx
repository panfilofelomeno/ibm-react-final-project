import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <div className="cart-controls">
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartPage;
