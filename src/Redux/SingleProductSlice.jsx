import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_singleproduct = createAsyncThunk("post/fetchpost_singleproduct", async () => {
    const res = await axios.get("http://localhost:3004/singleproduct");
    return res.data;
});


const  SingleProductSlice= createSlice({
    name: "SingleProduct",
    initialState: {
        SingleProduct: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_singleproduct.fulfilled, (state, action) => {
                state.SingleProduct= action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_singleproduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_singleproduct.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default SingleProductSlice.reducer;