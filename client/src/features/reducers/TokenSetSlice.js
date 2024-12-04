import { createSlice } from "@reduxjs/toolkit";
const TokenSlice=createSlice({
    name:'token',
    initialState:{
        token:null,
        
    },
    reducers:{
        loadtoken:(state,action)=>{
            state.token=action.payload;
        }

    }
})
 export const {loadtoken}=TokenSlice.actions;
 export default  TokenSlice.reducer;    