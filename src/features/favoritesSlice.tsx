import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types/Card';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface FavoritesState {
  items: Card[];
}

const initialState: FavoritesState = {
  items: [],
};

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Card>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);
export default persistedReducer;
