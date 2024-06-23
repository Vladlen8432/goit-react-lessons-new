import { productData } from './products.data';

const initialState = {
  products: JSON.parse(localStorage.getItem('product')) ?? productData,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'products/addProducts': {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case 'products/deleteProducts': {
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
