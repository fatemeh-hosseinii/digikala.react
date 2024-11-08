import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'; // Ensure axios is imported

export const fetch_foure = createAsyncThunk("Moreinfo/post", async () => {
  const res = await axios.get("http://localhost:3004/Moreinfo");
  return res.data;
});

const MoreinformationSlice = createSlice({
  name: "Moreinformation",
  initialState: {
    Moreinformation: [], // Updated to match
    loading: false,
    error: "",
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch_foure.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetch_foure.fulfilled, (state, action) => {
        state.Moreinformation = action.payload; // Updated field
        state.loading = false;
      })
      .addCase(fetch_foure.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while fetching menu data.";
      });
  }
});

export const { toggleMenu, closeMenu } = MoreinformationSlice.actions;
export default MoreinformationSlice.reducer;