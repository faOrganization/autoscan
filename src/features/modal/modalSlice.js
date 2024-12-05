import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: [],
    isActive: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload];
            state.isActive = true;
        },
        destroy: state => {
            const data = [...state.modals];
            data.pop();
            state.modals = data;
        },
        destroyAll: state => {
            state.modals = [];
        },
        inactive: state => {
            state.isActive = false;
        }
    }
})

export const {append, destroy, destroyAll, inactive} = modalSlice.actions;
export default modalSlice.reducer;