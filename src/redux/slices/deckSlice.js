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

      if (isExisting) {
        alert(`이미 선택한 포캣몬입니다.`);
        return;
      }

      if (state.deck.length >= 6) {
        alert(`더 이상 선택할 수 없습니다. `);
        return;
      }

      state.deck.push(action.payload);
    },

    deleteFromDeck: (state, action) => {
      state.deck = state.deck.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addToDeck, deleteFromDeck } = deckSlice.actions;
export default deckSlice.reducer;
