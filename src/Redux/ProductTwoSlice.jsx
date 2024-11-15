import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_twelve = createAsyncThunk("post/fetch_twelve", async () => {
    const res = await axios.get("http://localhost:3004/ProductTwo");
    return res.data;
});


const  ProductTwoSlice= createSlice({
    name: "ProductTwo",
    initialState: {
        ProductTwo: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_twelve.fulfilled, (state, action) => {
                state.ProductTwo= action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_twelve.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_twelve.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ProductTwoSlice.reducer;