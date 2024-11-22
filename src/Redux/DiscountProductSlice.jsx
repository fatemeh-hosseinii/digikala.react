import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_DiscountP = createAsyncThunk("DiscountP/fetchpost_DiscountP", async () => {
    const res = await axios.get("http://localhost:3004/product_discount");
    return res.data;
});

const DiscountProductSlice = createSlice({
    name: "DiscountP",
    initialState: {
        DiscountP: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_DiscountP.fulfilled, (state, action) => {
                state.DiscountP = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_DiscountP.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_DiscountP.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default DiscountProductSlice.reducer;