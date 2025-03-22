import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch a random quote
export const fetchQuote = createAsyncThunk("quote/fetchQuote", async (_, {rejectWithValue}) => {
    try{
        const response = await axios.get("https://api.adviceslip.com/advice");
        return response.data.slip;
    }
    catch {
        return rejectWithValue("Failed to fetch quote. Please try again.");
    }

  
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    currentQuote: null,
    favorites: [],
    loading: false,
    error: null,
    saveMessage: null, 
  },
  reducers: {
    addFavorite: (state, action) => {
    // Check if the quote already exists in favorites list
    const exists = state.favorites.some((quote) => quote.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
        state.saveMessage = "Advice saved successfully!";
      }
   
    },
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter((quote) => quote.id !== action.payload);
    },
    clearSaveMessage: (state) => {
        state.saveMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.currentQuote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addFavorite, removeFavorite , clearSaveMessage} = quoteSlice.actions;
export default quoteSlice.reducer;
