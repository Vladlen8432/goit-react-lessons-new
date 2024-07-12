export const selectProducts = state => state.productsStore.products;
export const selectProductIsLoading = state => state.productsStore.isLoading;
export const selectProductsError = state => state.productsStore.error;
export const selectProductsFilterTerm = state => state.productsStore.filterTerm;

export const selectUserData = state => state.auth.userData;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectAuthIsLoading = state => state.auth.authIsLoading;
export const selectAuthError = state => state.auth.authError;
