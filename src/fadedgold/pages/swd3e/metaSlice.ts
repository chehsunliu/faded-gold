import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MetaState {
  filename: string | null;
}

const initialState: MetaState = {
  filename: null,
};

export const metaSlice = createSlice({
  name: "swd3e/meta",
  initialState,
  reducers: {
    filenameUpdated: (state, action: PayloadAction<string>) => {
      state.filename = action.payload;
    },
  },
});

export const actions = metaSlice.actions;
export default metaSlice.reducer;
