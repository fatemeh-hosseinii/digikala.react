import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_seven = createAsyncThunk("Information/fetch_seven", async () => {
    const res = await axios.get("http://localhost:3004/baner");
    return res.data;
});

const  BaneroneSlice= createSlice({
    name: "BanerOne",
    initialState: {
        BanerOne: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_seven.fulfilled, (state, action) => {
                state.BanerOne = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_seven.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_seven.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default BaneroneSlice.reducer;
