import { createSlice } from "@reduxjs/toolkit";

const registerEmailSlice = createSlice({
    name: 'registerEmail',
    initialState: {
        email: null
    },

    reducers : {
        setRegisterEmail : (state, action) => {
            state.email = action.payload
        }
    }
})

export const {setRegisterEmail} = registerEmailSlice.actions;
export default registerEmailSlice.reducer;