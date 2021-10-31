import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "fadedgold/pages/swd3e/gameSlice";
import metaReducer from "fadedgold/pages/swd3e/metaSlice";
import partyReducer from "fadedgold/pages/swd3e/partySlice";

const reducer = combineReducers({
  game: gameReducer,
  meta: metaReducer,
  party: partyReducer,
});

export default reducer;
