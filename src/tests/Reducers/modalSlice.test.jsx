import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { openModal, closeModal } from '../../features/modal/modalSlice';

describe('modalReducer', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                modals: modalReducer,
            },
        });
    });

    test('should open a modal', () => {
        store.dispatch(openModal({ modalType: 'info', uniqueKey: 'modal1' }));
        const state = store.getState().modals;
        expect(state.openModals['modal1']).toEqual({ info: true });
    });

    test('should close a modal', () => {
        store.dispatch(openModal({ modalType: 'info', uniqueKey: 'modal1' }));
        store.dispatch(closeModal({ modalType: 'info', uniqueKey: 'modal1' }));
        const state = store.getState().modals;
        expect(state.openModals['modal1']).toBeUndefined();
    });

    test('should remove modal entry if all types are closed', () => {
        store.dispatch(openModal({ modalType: 'info', uniqueKey: 'modal1' }));
        store.dispatch(closeModal({ modalType: 'info', uniqueKey: 'modal1' }));
        store.dispatch(closeModal({ modalType: 'otherType', uniqueKey: 'modal1' }));
        const state = store.getState().modals;
        expect(state.openModals['modal1']).toBeUndefined();
    });
});
