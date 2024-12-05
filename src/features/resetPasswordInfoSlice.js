import { createSlice } from "@reduxjs/toolkit";

const resetPasswordInfoSlice = createSlice({
    name: 'resetPwdInfo',
    initialState : {
        resetPwdInfo : null
    },

    reducers: {
        setResetPwdInfo: (state, action) => {
            state.resetPwdInfo = action.payload;
        }
    }
})

export const {setResetPwdInfo} = resetPasswordInfoSlice.actions;
export default resetPasswordInfoSlice.reducer;