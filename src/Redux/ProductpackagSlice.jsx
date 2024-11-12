import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_eight = createAsyncThunk("post/fetch_eight", async () => {
    const res = await axios.get("http://localhost:3004/productpackage");
    return res.data;
});

// Slice definition
const  ProductpackagSlice= createSlice({
    name: "productpackage",
    initialState: {
        productpackage: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_eight.fulfilled, (state, action) => {
                state.productpackage= action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_eight.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_eight.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ProductpackagSlice.reducer;