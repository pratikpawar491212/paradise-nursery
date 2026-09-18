import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add a product to the cart.
     * If the product already exists, its quantity is increased by the
     * given amount (default 1); otherwise a new cart item is created.
     * Expects the full product object as the payload
     * ({ id, name, price, description, image, ... }).
     */
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    /**
     * Remove a product from the cart entirely.
     * Expects the product id as the payload.
     */
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    /**
     * Update the quantity of an existing cart item.
     * Expects an action payload of the form { id, quantity }.
     * If the new quantity is 0 or negative the item is removed.
     */
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

/** Total number of plants in the cart (sum of all quantities). */
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

/** Total cart price calculated from the products and their quantities. */
export const selectTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default cartSlice.reducer;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
