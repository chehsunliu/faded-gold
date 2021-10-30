import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  money: number;
}

const initialState: GameState = {
  money: 0,
};

export const gameSlice = createSlice({
  name: "swd3e/game",
  initialState,
  reducers: {
    moneyUpdated: (state, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
  },
});

export const { moneyUpdated } = gameSlice.actions;
export default gameSlice.reducer;
