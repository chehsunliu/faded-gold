import { configureStore } from "@reduxjs/toolkit";
import swdeReducer from "fadedgold/pages/swde/slice";
import swd3eReducer from "fadedgold/pages/swd3e/slice";

export const store = configureStore({
  reducer: {
    swde: swdeReducer,
    swd3e: swd3eReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
