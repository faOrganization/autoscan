import { createSlice } from "@reduxjs/toolkit";
import { object } from "yup";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null, token: localStorage.getItem('token')
        ? JSON.parse(localStorage.getItem('token'))
        : null},
    reducers : {
        setCredentials: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state[key] = value
            }
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('token', JSON.stringify(state.token));
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
});

export const {setCredentials, logOut} = authSlice.actions;
export default authSlice.reducer;

 export const selectCurrentUser = (state) => state.auth.user;
 export const selectCurrentToken = (state) => state.auth.token;