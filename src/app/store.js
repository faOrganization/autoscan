import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modal/modalSlice'
import createReportReducer from '../features/createReportSlice'
import registerEmailReducer from '../features/auth/registerEmailSlice'
import setResetPwdInfoReducer from "../features/resetPasswordInfoSlice";

import authReducer from '../features/auth/authSlice'
import { mainApi } from "../services/mainApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        modalReducer,
        createReport: createReportReducer,
        registerEmail: registerEmailReducer,
        resetPwdInfo: setResetPwdInfoReducer,
        auth: authReducer,
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true
});

setupListeners(store.dispatch)