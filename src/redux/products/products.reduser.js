import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      state.products.push(payload);
    },
    deleteProduct(state, { payload }) {
      state.products = state.products.filter(product => product.id !== payload);
    },
  },
});

export const { deleteProduct, addProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
