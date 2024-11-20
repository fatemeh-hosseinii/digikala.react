import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_ProductThree = createAsyncThunk("post/fetchpost_ProductThree", async () => {
    const res = await axios.get("http://localhost:3004/ProductThree");
    return res.data;
});


const  ProductThreeSlice= createSlice({
    name: "ProductThree",
    initialState: {
        ProductThree: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_ProductThree.fulfilled, (state, action) => {
                state.ProductThree= action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_ProductThree.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_ProductThree.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ProductThreeSlice.reducer;