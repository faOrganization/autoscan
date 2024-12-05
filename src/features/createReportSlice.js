import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carInfo : {
        brandName: null,
        modelName: null,
        year: null,
        images: [],
        file: [{img: null, data: null}],

    },
}

const createReportSlice = createSlice({
    name: 'createReport',
    initialState,
    reducers : {
        addCarInfo : (state, action) => {
            const data = {...state.carInfo, ...action.payload}
            state.carInfo = data
            console.log(state.carInfo);
        },
        removeImg : (state, action) => {
            state.carInfo.file = action.payload       
            console.log(state.carInfo);     
        }
    }
})

export const {addCarInfo, removeImg} = createReportSlice.actions;
export  default createReportSlice.reducer;