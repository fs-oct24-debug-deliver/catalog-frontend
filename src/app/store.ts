import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteReducer from '../features/favoritesSlice';
import cartReducer from '../features/cartSlice';
import themeSlice from '../features/themeSlice';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  cart: cartReducer,
  theme: themeSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorites', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
