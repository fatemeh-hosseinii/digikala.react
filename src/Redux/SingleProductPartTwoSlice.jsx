import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_single_product_parttwo= createAsyncThunk("post/fetchpost_single_product_parttwo", async () => {
    const res = await axios.get("http://localhost:3004/singleproduct_parttwo");
    return res.data;
});


const  SingleProductPartTwoSlice= createSlice({
    name: "SingleProductPartTwo",
    initialState: {
        SingleProductPartTwo: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_single_product_parttwo.fulfilled, (state, action) => {
                state.SingleProductPartTwo= action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_single_product_parttwo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_single_product_parttwo.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default SingleProductPartTwoSlice.reducer;