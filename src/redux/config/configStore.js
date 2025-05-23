import { configureStore } from "@reduxjs/toolkit";
import deckSilce from "../slices/deckSlice";

const store = configureStore({
  reducer: {
    deck: deckSilce,
  },
});

export default store;
