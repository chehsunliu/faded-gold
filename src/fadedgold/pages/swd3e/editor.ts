import { Character, PartyState } from "fadedgold/pages/swd3e/partySlice";
import { GameState } from "fadedgold/pages/swd3e/gameSlice";

interface GameInfo {
  game: GameState;
  party: PartyState;
}

const loadGame = (data: DataView): GameState => {
  const MONEY_ADDRESS = 0x128fe;

  return {
    money: data.getUint32(MONEY_ADDRESS, true),
  };
};

const loadCharacter = (data: DataView, offset: number): Character => {
  const EXPERIENCE_ADDRESS = 0x129fe + offset;

  const HEALTH_ADDRESS = EXPERIENCE_ADDRESS + 4;
  const MANA_ADDRESS = HEALTH_ADDRESS + 2;
  const VITALITY_ADDRESS = MANA_ADDRESS + 2;
  const MAX_HEALTH_ADDRESS = VITALITY_ADDRESS + 2;
  const MAX_MANA_ADDRESS = MAX_HEALTH_ADDRESS + 2;
  const MAX_VITALITY_ADDRESS = MAX_MANA_ADDRESS + 2;

  const STRENGTH_ADDRESS = MAX_VITALITY_ADDRESS + 2;
  const DURABILITY_ADDRESS = STRENGTH_ADDRESS + 2;
  const INTELLIGENCE_ADDRESS = DURABILITY_ADDRESS + 2;
  const SPEED_ADDRESS = INTELLIGENCE_ADDRESS + 2;

  const LEVEL_ADDRESS = 0x12a2a + offset;
  const METAL_RESISTANCE_ADDRESS = LEVEL_ADDRESS + 1;
  const WOOD_RESISTANCE_ADDRESS = METAL_RESISTANCE_ADDRESS + 1;
  const WATER_RESISTANCE_ADDRESS = WOOD_RESISTANCE_ADDRESS + 1;
  const FIRE_RESISTANCE_ADDRESS = WATER_RESISTANCE_ADDRESS + 1;
  const EARTH_RESISTANCE_ADDRESS = FIRE_RESISTANCE_ADDRESS + 1;

  return {
    experience: data.getUint32(EXPERIENCE_ADDRESS, true),

    health: data.getUint16(HEALTH_ADDRESS, true),
    mana: data.getUint16(MANA_ADDRESS, true),
    vitality: data.getUint16(VITALITY_ADDRESS, true),
    maxHealth: data.getUint16(MAX_HEALTH_ADDRESS, true),
    maxMana: data.getUint16(MAX_MANA_ADDRESS, true),
    maxVitality: data.getUint16(MAX_VITALITY_ADDRESS, true),

    strength: data.getUint16(STRENGTH_ADDRESS, true),
    durability: data.getUint16(DURABILITY_ADDRESS, true),
    intelligence: data.getUint16(INTELLIGENCE_ADDRESS, true),
    speed: data.getUint16(SPEED_ADDRESS, true),

    level: data.getUint8(LEVEL_ADDRESS),
    metalResistance: data.getUint8(METAL_RESISTANCE_ADDRESS),
    woodResistance: data.getUint8(WOOD_RESISTANCE_ADDRESS),
    waterResistance: data.getUint8(WATER_RESISTANCE_ADDRESS),
    fireResistance: data.getUint8(FIRE_RESISTANCE_ADDRESS),
    earthResistance: data.getUint8(EARTH_RESISTANCE_ADDRESS),
  };
};

const loadParty = (data: DataView): PartyState => {
  return {
    chen: loadCharacter(data, 0),
    yu: loadCharacter(data, 0x3c),
    tuoba: loadCharacter(data, 0x3c * 2),
    chang: loadCharacter(data, 0x3c * 3),
  };
};

export const loadGameInfo = (buffer: ArrayBuffer): GameInfo => {
  const data = new DataView(buffer);

  return {
    game: loadGame(data),
    party: loadParty(data),
  };
};

export const overwriteGameInfo = (buffer: ArrayBuffer, info: GameInfo) => {};
