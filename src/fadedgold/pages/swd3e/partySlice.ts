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
type Party = Record<CharacterId, Character>;

const initialState: Party = {
  chen: { ...emptyCharacter },
  yu: { ...emptyCharacter },
  tuoba: { ...emptyCharacter },
  chang: { ...emptyCharacter },
};

interface CharacterPayload {
  id: CharacterId;
  value: number;
}

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    experienceUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].experience = action.payload.value;
    },
    healthUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].health = action.payload.value;
    },
    manaUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].mana = action.payload.value;
    },
    vitalityUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].vitality = action.payload.value;
    },
    maxHealthUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].maxHealth = action.payload.value;
    },
    maxManaUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].maxMana = action.payload.value;
    },
    maxVitalityUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].maxVitality = action.payload.value;
    },
    strengthUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].strength = action.payload.value;
    },
    durabilityUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].durability = action.payload.value;
    },
    intelligenceUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].intelligence = action.payload.value;
    },
    speedUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].speed = action.payload.value;
    },
    levelUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].level = action.payload.value;
    },
    metalResistanceUpdated: (
      state,
      action: PayloadAction<CharacterPayload>
    ) => {
      state[action.payload.id].metalResistance = action.payload.value;
    },
    woodResistanceUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].woodResistance = action.payload.value;
    },
    waterResistanceUpdated: (
      state,
      action: PayloadAction<CharacterPayload>
    ) => {
      state[action.payload.id].waterResistance = action.payload.value;
    },
    fireResistanceUpdated: (state, action: PayloadAction<CharacterPayload>) => {
      state[action.payload.id].fireResistance = action.payload.value;
    },
    earthResistanceUpdated: (
      state,
      action: PayloadAction<CharacterPayload>
    ) => {
      state[action.payload.id].earthResistance = action.payload.value;
    },
  },
});
