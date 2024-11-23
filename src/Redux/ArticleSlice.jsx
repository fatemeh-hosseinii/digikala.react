import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchpost_Article = createAsyncThunk("Article/fetchpost_Article", async () => {
    const res = await axios.get("http://localhost:3004/Article");
    return res.data;
});

const  ArticleSlice= createSlice({
    name: "Article",
    initialState: {
        Article: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_Article.fulfilled, (state, action) => {
                state.Article = action.payload;
                state.loading = false;
            })
            .addCase(fetchpost_Article.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_Article.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default ArticleSlice.reducer;