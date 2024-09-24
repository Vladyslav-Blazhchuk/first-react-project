import { configureStore } from '@reduxjs/toolkit';
import favReducer, { addToFav } from '../../features/fav/favSlice';

describe('favReducer', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                fav: favReducer,
            },
        });
        localStorage.removeItem('fav');
    });

    afterEach(() => {
        localStorage.removeItem('fav');
    });

    test('should add a product to favorites', () => {
        const product = { id: 1, name: 'Product 1' };
        store.dispatch(addToFav(product));

        const state = store.getState().fav;
        expect(state).toContainEqual(product);

        expect(JSON.parse(localStorage.getItem('fav'))).toContainEqual(product);
    });

    test('should check if a product is in favorites', () => {
        const product = { id: 1, name: 'Product 1' };
        store.dispatch(addToFav(product));

        const state = store.getState().fav;
        const isInFav = state.some(item => item.id === 1);

        expect(isInFav).toBe(true);
    });
});
