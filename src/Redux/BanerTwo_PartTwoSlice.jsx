import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_eleven = createAsyncThunk("PartTwo/fetch_eleven", async () => {
    const res = await axios.get("http://localhost:3004/two_brand_parttwo");
    return res.data;
});

const BanerTwo_PartTwoSlice = createSlice({
    name: "BanerTwo_PartTwo",
    initialState: {
        BanerTwo_PartTwo: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_eleven.fulfilled, (state, action) => {
                state.BanerTwo_PartTwo = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_eleven.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_eleven.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default BanerTwo_PartTwoSlice.reducer;