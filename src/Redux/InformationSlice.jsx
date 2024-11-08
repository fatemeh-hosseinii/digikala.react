import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_tree = createAsyncThunk("Information/fetch_tree", async () => {
    const res = await axios.get("http://localhost:3004/Information");
    return res.data;
});

const InformationSlice = createSlice({
    name: "information",
    initialState: {
        information: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_tree.fulfilled, (state, action) => {
                state.information = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_tree.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_tree.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default InformationSlice.reducer;
