import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from '../../features/products/productsSlice';

describe('productsReducer', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                products: productsReducer,
            },
        });
    });

    test('should handle fetchProducts pending', async () => {
        global.fetch = jest.fn(() =>
            new Promise(() => { })
        );

        store.dispatch(fetchProducts());

        const state = store.getState().products;
        expect(state.status).toBe('loading');
    });

    test('should handle fetchProducts fulfilled', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([{ id: 1, name: 'Product 1' }]),
            })
        );

        await store.dispatch(fetchProducts());
        const state = store.getState().products;
        expect(state.status).toBe('succeeded');
        expect(state.items).toEqual([{ id: 1, name: 'Product 1' }]);
    });

    test('should handle fetchProducts rejected', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Failed to fetch products'))
        );

        await store.dispatch(fetchProducts());
        const state = store.getState().products;
        expect(state.status).toBe('failed');
        expect(state.error).toBe('Failed to fetch products');
    });
});
