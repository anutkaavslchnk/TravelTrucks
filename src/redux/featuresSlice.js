// campersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './trailersOps';




const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    currentCamper: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentCamper(state) {
      state.currentCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentCamper } = campersSlice.actions;
export default campersSlice.reducer;
