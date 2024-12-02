import { createSlice } from "@reduxjs/toolkit";
const ComplainRegister = createSlice({
    name: "complainregister",
    initialState: {
        complainData: null,
        isloading: false,


    },
    reducers: {
        onLoad: (state) => {
            state.isloading = true;

        },
        onFetchSuccess: (state, action) => {
            state.complainData = action.payload;
            state.isloading = true;


        },
        onReset: (state) => {
            state.complainData = null;
            state.isloading = false;

        }
    }
});

export const {onLoad,onFetchSuccess,onReset}=ComplainRegister.actions;
export default ComplainRegister.reducer;