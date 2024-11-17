import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_Bestsell = createAsyncThunk("Bestbrand/fetch_ten", async () => {
    const res = await axios.get("http://localhost:3004/bestselling");
    return res.data;
});

const BestsellingSlice = createSlice({
    name: "Bestsell",
    initialState: {
        Bestsell: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_Bestsell.fulfilled, (state, action) => {
                state.Bestsell = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_Bestsell.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_Bestsell.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default BestsellingSlice.reducer;