import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct1 = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const res = await axios.get(`http://localhost:3004/AmazingProduct/${id}`);
   
    return Array.isArray(res.data) ? res.data : [res.data];
  }
);

const Showproduct1Slice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct1.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});

export default Showproduct1Slice.reducer;

