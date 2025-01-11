import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types/Card';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface CartProduct extends Card {
  quantity: number;
}

type CartItems = {
  items: CartProduct[];
};

const initialState: CartItems = {
  items: [],
};

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartProduct>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    addQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  addQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer;
