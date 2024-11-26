import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_six = createAsyncThunk("Amazing/fetch_six", async () => {
    const res = await axios.get("http://localhost:3004/kala");
    return res.data;
});

const  AmazingShopSlice= createSlice({
    name: "AmazingShop",
    initialState: {
        AmazingShop: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_six.fulfilled, (state, action) => {
                state.AmazingShop = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_six.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_six.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default AmazingShopSlice.reducer;