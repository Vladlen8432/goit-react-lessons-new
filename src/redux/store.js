import { configureStore } from '@reduxjs/toolkit';
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
import { productsReducer } from './products/products.reduser';
import { modalReducer } from './modal/modal.reducer';
import storage from 'redux-persist/lib/storage';

const productsConfig = {
  key: 'products',
  storage,
  whitelist: ['products'],
};

const modalConfig = {
  key: 'modal',
  storage,
};

export const store = configureStore({
  reducer: {
    productsStore: persistReducer(productsConfig, productsReducer),
    modal: persistReducer(modalConfig, modalReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
