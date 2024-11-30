import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCampers = createAsyncThunk(
  "vehicles/fetchCampers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
      return response.data.items;
    } catch (error) {
      return rejectWithValue("Failed to load campers data. Please try again later.");
    }
  }
);
