import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_nine = createAsyncThunk("Information/fetch_nine", async () => {
    const res = await axios.get("http://localhost:3004/two_brand");
    return res.data;
});

const BanerTwoSlice = createSlice({
    name: "BanerTwo",
    initialState: {
        BanerTwo: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_nine.fulfilled, (state, action) => {
                state.BanerTwo = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_nine.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_nine.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default BanerTwoSlice.reducer;
