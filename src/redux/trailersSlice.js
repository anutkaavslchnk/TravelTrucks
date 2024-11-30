import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./trailersOps";

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  hasMore: true,
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

        if (action.payload.page === 1) {
          state.campers = action.payload.campers;  
        } else {
          state.campers = state.campers.concat(action.payload.campers);  
        }

        state.currentPage = action.payload.page;

       
        state.hasMore = action.payload.campers.length === 4;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default vehiclesSlice.reducer;
