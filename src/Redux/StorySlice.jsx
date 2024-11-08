import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchpost_one = createAsyncThunk("story/fetch_one", async () => {
    const res = await axios.get("http://localhost:3004/story");
    return res.data;
});

const StorySlice = createSlice({
    name: "story",
    initialState: {
        story: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_one.fulfilled, (state, action) => {
                state.story = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_one.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_one.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default StorySlice.reducer;

