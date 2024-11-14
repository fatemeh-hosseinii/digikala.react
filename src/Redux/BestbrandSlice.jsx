import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_ten = createAsyncThunk("Bestbrand/fetch_ten", async () => {
    const res = await axios.get("http://localhost:3004/BestBrand");
    return res.data;
});

const BestbrandSlice = createSlice({
    name: "Bestbrand",
    initialState: {
        Bestbrand: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_ten.fulfilled, (state, action) => {
                state.Bestbrand = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_ten.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_ten.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default BestbrandSlice.reducer;
