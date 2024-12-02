import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"login",
    initialState:{
        user:null,
        isloading:false,
        error:''
    },
    reducers:{
        onLoad:(state)=>{
            state.isloading=true;
        },
        onFetchSuccess:(state,action)=>{
            state.user=action.payload
            state.isloading=false
        },
        onFetchError:(state,action)=>{
            state.error=action.payload;
            state.isloading=false;
        }

    }
});
export const {onLoad,onFetchError,onFetchSuccess}=loginSlice.actions;
export default loginSlice.reducer;