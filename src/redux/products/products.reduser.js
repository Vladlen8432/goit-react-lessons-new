import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  filterTerm: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterTerm(state, { payload }) {
      state.filterTerm = payload;
    },
    addProduct(state, { payload }) {
      state.products.push(payload);
    },
    deleteProduct(state, { payload }) {
      state.products = state.products.filter(product => product.id !== payload);
    },
  },
});

export const { deleteProduct, addProduct, setFilterTerm } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
