import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost_two = createAsyncThunk("Slider/fetch_two", async () => {
    const res = await axios.get("http://localhost:3004/Slider");
    return res.data;
});

const SliderSlice = createSlice({
    name: "slider",
    initialState: {
        slider: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_two.fulfilled, (state, action) => {
                state.slider = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_two.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_two.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default SliderSlice.reducer;