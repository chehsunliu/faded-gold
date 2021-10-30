import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
  experience: number;

  health: number;
  maxHealth: number;
  vitality: number;
  maxVitality: number;
  mana: number;
  maxMana: number;
}

type CharacterAttribute = keyof Character;

const emptyCharacter: Character = {
  experience: 0,
  health: 0,
  mana: 0,
  maxHealth: 0,
  maxMana: 0,
  maxVitality: 0,
  vitality: 0,
};

const characterIds = ["fu", "wenjin", "puppet", "stone"] as const;
type CharacterId = typeof characterIds[number];
type PartyState = Record<CharacterId, Character>;

const initialState: PartyState = {
  fu: { ...emptyCharacter },
  wenjin: { ...emptyCharacter },
  puppet: { ...emptyCharacter },
  stone: { ...emptyCharacter },
};

interface CharacterPayload {
  id: CharacterId;
  attribute: CharacterAttribute;
  value: number;
}

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    attributeUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      const { id, attribute, value } = action.payload;
      state[id][attribute] = value;
    },
  },
});

export const { attributeUpdated } = partySlice.actions;
export default partySlice.reducer;
