import { combineReducers, createStore } from 'redux';
import { productsReducer } from './products/products.reduser';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  productsStore: productsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
