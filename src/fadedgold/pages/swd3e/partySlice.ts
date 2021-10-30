import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Character {
  experience: number;

  health: number;
  mana: number;
  vitality: number;
  maxHealth: number;
  maxMana: number;
  maxVitality: number;

  strength: number;
  durability: number;
  intelligence: number;
  speed: number;

  level: number;
  metalResistance: number;
  woodResistance: number;
  waterResistance: number;
  fireResistance: number;
  earthResistance: number;
}

type CharacterAttribute = keyof Character;

const emptyCharacter: Character = {
  durability: 0,
  earthResistance: 0,
  experience: 0,
  fireResistance: 0,
  health: 0,
  intelligence: 0,
  level: 0,
  mana: 0,
  maxHealth: 0,
  maxMana: 0,
  maxVitality: 0,
  metalResistance: 0,
  speed: 0,
  strength: 0,
  vitality: 0,
  waterResistance: 0,
  woodResistance: 0,
};

const characterIds = ["chen", "yu", "tuoba", "chang"] as const;
type CharacterId = typeof characterIds[number];
export type PartyState = Record<CharacterId, Character>;

const initialState: PartyState = {
  chen: { ...emptyCharacter },
  yu: { ...emptyCharacter },
  tuoba: { ...emptyCharacter },
  chang: { ...emptyCharacter },
};

interface CharacterPayload {
  id: CharacterId;
  attribute: CharacterAttribute;
  value: number;
}

export const partySlice = createSlice({
  name: "swd3e/party",
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
