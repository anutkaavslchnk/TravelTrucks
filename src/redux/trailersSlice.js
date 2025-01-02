import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./trailersOps";
import { selectCampers, selectFilter } from "./selectors";

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  hasMore: true,
};
export const selectFilteredTrailers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    if (!filter) return campers; 

    

    return campers.filter((item) => {
      const matchLocation = filter.location ? item.location.includes(filter.location) : true;
      const matchAc = filter.ac ? item.AC === filter.ac : true;
      const matchKitchen = filter.kitchen ? item.kitchen === filter.kitchen : true;
      const matchTv = filter.tv ? item.TV === filter.tv : true;
      const matchBathroom = filter.bathroom ? item.bathroom === filter.bathroom : true;
      const matchAutomatic = filter.automatic ? item.transmission === 'automatic' : true;
      const matchType = filter.type ? item.form === filter.type : true;
      return matchLocation && matchAc && matchKitchen && matchTv && matchBathroom && matchAutomatic && matchType;
    });
    
    
  }
);


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
      
        // If it's the first page, replace the campers array, otherwise append the new ones
        if (action.payload.page === 1) {
          state.campers = action.payload.campers;
        } else {
          const newCampers = action.payload.campers.filter(
            camper => !state.campers.some(existingCamper => existingCamper.id === camper.id)
          );
          state.campers = [...state.campers, ...newCampers]; // Append new campers to existing ones
        }
      
        // Update the currentPage to reflect the latest page
        state.currentPage = action.payload.page;
      
        // Set hasMore to false if less than 4 campers are returned (indicating no more data)
        state.hasMore = action.payload.campers.length === 4;
      });
      
  },
});

export default vehiclesSlice.reducer;
