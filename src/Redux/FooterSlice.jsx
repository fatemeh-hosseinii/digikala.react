import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_footer = createAsyncThunk("footer/fetchpost_footer", async () => {
    const res = await axios.get("http://localhost:3004/footer");
    return res.data;
});

const FooterSlice = createSlice({
    name: "Footer",
    initialState: {
        Footer: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_footer.fulfilled, (state, action) => {
                state.Footer = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_footer.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_footer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred while fetching posts.";
            });
    }
});

export default FooterSlice.reducer;