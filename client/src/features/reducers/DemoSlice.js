import { createSlice } from "@reduxjs/toolkit";

export const demoSlice = createSlice({
  name: 'demo',
  initialState: {
    cats: [],
    isloading: false,
    error: null,  
  },
  reducers: {
    getcatsFetch: (state) => {
      state.isloading = true;
      state.error = null;  
    },
    getcatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isloading = false;
    },
    getcatsFailure: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
  },
});

export const { getcatsFetch, getcatsSuccess, getcatsFailure } = demoSlice.actions;
export default demoSlice.reducer;
