import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  money: number;
  scene: number;
  x: number;
  y: number;
}

const initialState: GameState = {
  money: 0,
  scene: 0,
  x: 0,
  y: 0,
};

export const gameSlice = createSlice({
  name: "swd3e/game",
  initialState,
  reducers: {
    replaced: (state, action: PayloadAction<GameState>) => {
      return action.payload;
    },
    moneyUpdated: (state, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
    sceneUpdated: (state, action: PayloadAction<number>) => {
      state.scene = action.payload;
    },
    xUpdated: (state, action: PayloadAction<number>) => {
      state.x = action.payload;
    },
    yUpdated: (state, action: PayloadAction<number>) => {
      state.y = action.payload;
    },
  },
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
