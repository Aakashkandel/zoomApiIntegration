import { createSlice } from "@reduxjs/toolkit";
export const complainslice=createSlice({
    name:'complain',
    initialState:{
        complains:[],
        isloading:false,
        error:null
    },
    reducers:{
        getcomplainFetch:(state)=>{
            state.isloading=true;
        },
        getcomplainSuccess:(state,action)=>{
            state.complains=action.payload;
            state.isloading=false;
        },
        getcomplainError:(state,action)=>{
            state.isloading=false;
            state.error=action.payload
        },
        resetComplainData:(state)=>{
            state.isloading=false;
            state.error=null
            state.complains=[]
        }
    }
});
export const{getcomplainError,getcomplainFetch,getcomplainSuccess,resetComplainData}=complainslice.actions;
export default complainslice.reducer