import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_News = createAsyncThunk("News/fetch_ten", async () => {
    const res = await axios.get("http://localhost:3004/News");
    return res.data;
});

const NewsSlice = createSlice({
    name: "News",
    initialState: {
        News: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_News.fulfilled, (state, action) => {
                state.News = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_News.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_News.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default NewsSlice.reducer;