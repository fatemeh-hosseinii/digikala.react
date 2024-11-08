import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data
export const fetchpost = createAsyncThunk("post/fetch", async () => {
    const res = await axios.get("http://localhost:3004/Navbar");
    return res.data;
});

// Slice definition
const NavbarSlice = createSlice({
    name: "Navbar",
    initialState: {
        Navbar: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost.fulfilled, (state, action) => {
                state.Navbar = action.payload; // Corrected to 'Navbar'
                state.loading = false; 
            })
            .addCase(fetchpost.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default NavbarSlice.reducer;
