import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deck: [],
};

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    addToDeck: (state, action) => {
      const isExisting = state.deck.find((p) => p.id === action.payload.id);

      if (isExisting || state.deck.length >= 6) return;

      state.deck.push(action.payload);
    },

    deleteFromDeck: (state, action) => {
      state.deck = state.deck.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addToDeck, deleteFromDeck } = deckSlice.actions;
export default deckSlice.reducer;
