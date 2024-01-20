import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [

    ]
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },

        deleteFromCart: (state, action) => {
            const indexToRemove = state.items.findIndex(
                (item) => item.id === action.payload
            );

            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer