import { createSlice } from '@reduxjs/toolkit';

const loadHeartsFromLocalStorage = () => {
  const storedHearts = localStorage.getItem('hearts');
  return storedHearts ? JSON.parse(storedHearts) : {};
};

const initialState = {
  hearts: loadHeartsFromLocalStorage(),
};

const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      const { itemId } = action.payload;
      state.hearts[itemId] = !state.hearts[itemId];
      localStorage.setItem('hearts', JSON.stringify(state.hearts));  // Save hearts to localStorage
    },
  },
});

export const { toggleHeart } = heartSlice.actions;
export default heartSlice.reducer;
