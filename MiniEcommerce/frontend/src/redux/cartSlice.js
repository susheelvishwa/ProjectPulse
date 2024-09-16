import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.total += item.price * item.quantity;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const itemIndex = state.items.findIndex((i) => i.productId === productId);
      if (itemIndex >= 0) {
        state.total -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
