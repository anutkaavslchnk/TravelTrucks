import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from './trailersSlice.js';
import heartReducer from './heartSlice';
const store = configureStore({
  reducer: {
    heart: heartReducer,
    vehicles: vehiclesReducer,
  },
});

export default store;
