import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedColor: null,
  selectedPrice: null,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    selectColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});

export const { selectColor, setPrice } = colorSlice.actions;

export default colorSlice.reducer;

