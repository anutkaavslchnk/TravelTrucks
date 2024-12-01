import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCampers = createAsyncThunk(
  "vehicles/fetchCampers",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=4`);
      return { campers: response.data.items, page };
    } catch (error) {
      return rejectWithValue("Failed to load campers data. Please try again later.");
    }
  }
);






export const fetchCamper = createAsyncThunk(
  'campers/fetchCamper',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch camper details');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);