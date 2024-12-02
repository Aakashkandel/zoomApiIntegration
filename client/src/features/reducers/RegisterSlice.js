import { createSlice } from "@reduxjs/toolkit";


export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: '',
    token: '',  
    message: '',
    error: '',
    isLoading: false,
    success:false,
  },
  reducers: {
    onLoad: (state) => {
      state.isLoading = true;
    },
    onFetchSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;   
      state.isLoading = false;
    
    },
    onFetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    onFetchMessage: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    }
  }
});

export const { onLoad, onFetchSuccess, onFetchError, onFetchMessage } = registerSlice.actions;
export default registerSlice.reducer;
