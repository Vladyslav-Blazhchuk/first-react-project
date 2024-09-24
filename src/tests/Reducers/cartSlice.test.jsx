import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addToCart, clearCart } from '../../features/cart/cartSlice';

describe('cartReducer', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                cart: cartReducer,
            },
        });
        localStorage.removeItem('cart');
    });

    afterEach(() => {
        localStorage.removeItem('cart');
    });

    test('should add an item to the cart', () => {
        const item = { id: 1, name: 'Product 1', quantity: 1 };
        store.dispatch(addToCart(item));
        const state = store.getState().cart;
        expect(state).toContainEqual(item);
        expect(JSON.parse(localStorage.getItem('cart'))).toContainEqual(item);
    });

    test('should clear the cart', () => {
        store.dispatch(addToCart({ id: 1, name: 'Product 1', quantity: 1 }));
        store.dispatch(addToCart({ id: 2, name: 'Product 2', quantity: 2 }));

        store.dispatch(clearCart());

        const state = store.getState().cart;
        expect(state).toHaveLength(0);

        expect(localStorage.getItem('cart')).toBe(null);
    });
});
