import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hearts: {},
};

const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      const { itemId } = action.payload;
      state.hearts[itemId] = !state.hearts[itemId];
    },
  },
});

export const { toggleHeart } = heartSlice.actions;
export default heartSlice.reducer;
