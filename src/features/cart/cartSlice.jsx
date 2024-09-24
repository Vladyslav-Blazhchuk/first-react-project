import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart(state, action) {
            const { id, uniqueKey } = action.payload;
            const newState = state.filter((item, index) => `${item.id}-${index}` !== uniqueKey);
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
        },
        clearCart: (state) => {
            localStorage.removeItem('cart');
            return [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
