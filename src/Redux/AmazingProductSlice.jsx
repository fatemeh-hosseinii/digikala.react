import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_five = createAsyncThunk("Amazing/fetch_five", async () => {
    const res = await axios.get("http://localhost:3004/AmazingProduct");
    return res.data;
});

const  AmazingProductSlice= createSlice({
    name: "AmazingProduct",
    initialState: {
        AmazingProduct: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_five.fulfilled, (state, action) => {
                state.AmazingProduct = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_five.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_five.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default AmazingProductSlice.reducer;