import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from './trailersSlice.js';
import heartReducer from './heartSlice';
import { filtersSliceReducer } from "./filterSlice.js";
const store = configureStore({
  reducer: {
    filters:filtersSliceReducer,
    heart: heartReducer,
    vehicles: vehiclesReducer,
  },
});

export default store;
