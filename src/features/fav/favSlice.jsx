import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    name: 'fav',
    initialState: JSON.parse(localStorage.getItem('fav')) || [],
    reducers: {
        addToFav(state, action) {
            if (!state.some(item => item.id === action.payload.id)) {
                state.push(action.payload);
                localStorage.setItem('fav', JSON.stringify(state));
            }
        },
        removeFromFav(state, action) {
            const updatedFav = state.filter(item => item.id !== action.payload);
            localStorage.setItem('fav', JSON.stringify(updatedFav));
            return updatedFav;
        },
        isProductInFav(state, action) {
            return state.some(item => item.id === action.payload);
        }
    },
});

export const { addToFav, removeFromFav, isProductInFav } = favSlice.actions;
export default favSlice.reducer;
