import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Fern', price: 10, category: 'Indoor', thumbnail: 'repeater.jpg' },
  { id: 2, name: 'Succulent', price: 8, category: 'Indoor', thumbnail: 'repeater.jpg' },
  { id: 3, name: 'Cactus', price: 15, category: 'Outdoor', thumbnail: 'repeater.jpg' },
  { id: 4, name: 'Palm', price: 20, category: 'Outdoor', thumbnail: 'repeater.jpg' },
  { id: 5, name: 'Bonsai', price: 30, category: 'Indoor', thumbnail: 'repeater.jpg' },
  { id: 6, name: 'Orchid', price: 25, category: 'Flowering', thumbnail: 'repeater.jpg' },
];

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="products">
        {plants.map(plant => {
          const inCart = cartItems.find(item => item.id === plant.id);
          return (
            <div key={plant.id} className="plant">
              <img src={plant.thumbnail} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button
                disabled={!!inCart}
                onClick={() => dispatch(addToCart(plant))}
              >
                {inCart ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
