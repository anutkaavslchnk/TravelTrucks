import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./trailersOps";

const initialState = {
    campers: [],
    isLoading: false,
    error: null,
  };

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCampers.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCampers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.campers = action.payload;
        })
        .addCase(fetchCampers.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default vehiclesSlice.reducer;
  