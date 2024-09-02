import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload.id);
      if (!plant) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    incrementQuantity: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant) {
        plant.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += plant.price;
      }
    },
    decrementQuantity: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= plant.price;
      }
    },
    removeFromCart: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant) {
        state.totalItems -= plant.quantity;
        state.totalPrice -= plant.quantity * plant.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
