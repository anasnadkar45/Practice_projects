import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    },
    deleteFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    },
  }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
