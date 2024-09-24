import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import favReducer from "./features/fav/favSlice";
import modalReducer from "./features/modal/modalSlice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        fav: favReducer,
        modals: modalReducer,
    },
});
