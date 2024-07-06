export const selectProducts = state => state.productsStore.products;
export const selectProductIsLoading = state => state.productsStore.isLoading;
export const selectProductsError = state => state.productsStore.error;
export const selectProductsFilterTerm = state => state.productsStore.filterTerm;
