import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from './trailersSlice.js';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});

export default store;
