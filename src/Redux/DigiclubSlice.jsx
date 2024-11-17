import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_Digiclub = createAsyncThunk("Digiclub/fetchpost_Digiclub", async () => {
    const res = await axios.get("http://localhost:3004/digiclub");
    return res.data;
});

const DigiclubSlice = createSlice({
    name: "Digiclub",
    initialState: {
        Digiclub: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_Digiclub.fulfilled, (state, action) => {
                state.Digiclub = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_Digiclub.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_Digiclub.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default DigiclubSlice.reducer;
