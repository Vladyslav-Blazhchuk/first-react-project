import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openModals: {},
};

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal(state, action) {
            const { modalType, uniqueKey } = action.payload;
            state.openModals[uniqueKey] = { ...state.openModals[uniqueKey], [modalType]: true };
        },
        closeModal(state, action) {
            const { modalType, uniqueKey } = action.payload;
            if (state.openModals[uniqueKey]) {
                state.openModals[uniqueKey][modalType] = false;
                if (Object.values(state.openModals[uniqueKey]).every(v => !v)) {
                    delete state.openModals[uniqueKey];
                }
            }
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
