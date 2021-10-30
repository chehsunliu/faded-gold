import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "fadedgold/pages/swde/gameSlice";
import partyReducer from "fadedgold/pages/swde/partySlice";

const reducer = combineReducers({
  game: gameReducer,
  party: partyReducer,
});

export default reducer;
