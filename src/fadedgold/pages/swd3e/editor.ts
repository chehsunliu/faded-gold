import { Character, PartyState } from "fadedgold/pages/swd3e/partySlice";
import { GameState } from "fadedgold/pages/swd3e/gameSlice";

const SCENE_ADDRESS = 0x128da;
const X_ADDRESS = 0x128de;
const Y_ADDRESS = 0x128e2;

const MONEY_ADDRESS = 0x128fe;

const EXPERIENCE_ADDRESS = 0x129fe;

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

const LEVEL_ADDRESS = 0x12a2a;
const METAL_RESISTANCE_ADDRESS = LEVEL_ADDRESS + 1;
const WOOD_RESISTANCE_ADDRESS = METAL_RESISTANCE_ADDRESS + 1;
const WATER_RESISTANCE_ADDRESS = WOOD_RESISTANCE_ADDRESS + 1;
const FIRE_RESISTANCE_ADDRESS = WATER_RESISTANCE_ADDRESS + 1;
const EARTH_RESISTANCE_ADDRESS = FIRE_RESISTANCE_ADDRESS + 1;

interface GameInfo {
  game: GameState;
  party: PartyState;
}

const loadGame = (data: DataView): GameState => {
  return {
    money: data.getUint32(MONEY_ADDRESS, true),
    scene: data.getUint32(SCENE_ADDRESS, true),
    x: data.getUint32(X_ADDRESS, true),
    y: data.getUint32(Y_ADDRESS, true),
  };
};

const loadCharacter = (data: DataView, offset: number): Character => {
  return {
    experience: data.getUint32(EXPERIENCE_ADDRESS + offset, true),

    health: data.getUint16(HEALTH_ADDRESS + offset, true),
    mana: data.getUint16(MANA_ADDRESS + offset, true),
    vitality: data.getUint16(VITALITY_ADDRESS + offset, true),
    maxHealth: data.getUint16(MAX_HEALTH_ADDRESS + offset, true),
    maxMana: data.getUint16(MAX_MANA_ADDRESS + offset, true),
    maxVitality: data.getUint16(MAX_VITALITY_ADDRESS + offset, true),

    strength: data.getUint16(STRENGTH_ADDRESS + offset, true),
    durability: data.getUint16(DURABILITY_ADDRESS + offset, true),
    intelligence: data.getUint16(INTELLIGENCE_ADDRESS + offset, true),
    speed: data.getUint16(SPEED_ADDRESS + offset, true),

    level: data.getUint8(LEVEL_ADDRESS + offset),
    metalResistance: data.getUint8(METAL_RESISTANCE_ADDRESS + offset),
    woodResistance: data.getUint8(WOOD_RESISTANCE_ADDRESS + offset),
    waterResistance: data.getUint8(WATER_RESISTANCE_ADDRESS + offset),
    fireResistance: data.getUint8(FIRE_RESISTANCE_ADDRESS + offset),
    earthResistance: data.getUint8(EARTH_RESISTANCE_ADDRESS + offset),
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

const overwriteGame = (data: DataView, game: GameState) => {
  data.setUint32(MONEY_ADDRESS, game.money, true);
};

const overwriteCharacter = (
  data: DataView,
  offset: number,
  stats: Character
) => {
  data.setUint32(EXPERIENCE_ADDRESS + offset, stats.experience, true);

  data.setUint16(HEALTH_ADDRESS + offset, stats.health, true);
  data.setUint16(MANA_ADDRESS + offset, stats.mana, true);
  data.setUint16(VITALITY_ADDRESS + offset, stats.vitality, true);
  data.setUint16(MAX_HEALTH_ADDRESS + offset, stats.maxHealth, true);
  data.setUint16(MAX_MANA_ADDRESS + offset, stats.maxMana, true);
  data.setUint16(MAX_VITALITY_ADDRESS + offset, stats.maxVitality, true);

  data.setUint16(STRENGTH_ADDRESS + offset, stats.strength, true);
  data.setUint16(DURABILITY_ADDRESS + offset, stats.durability, true);
  data.setUint16(INTELLIGENCE_ADDRESS + offset, stats.intelligence, true);
  data.setUint16(SPEED_ADDRESS + offset, stats.speed, true);

  data.setUint8(LEVEL_ADDRESS + offset, stats.level);
  data.setUint8(METAL_RESISTANCE_ADDRESS + offset, stats.metalResistance);
  data.setUint8(WOOD_RESISTANCE_ADDRESS + offset, stats.woodResistance);
  data.setUint8(WATER_RESISTANCE_ADDRESS + offset, stats.waterResistance);
  data.setUint8(FIRE_RESISTANCE_ADDRESS + offset, stats.fireResistance);
  data.setUint8(EARTH_RESISTANCE_ADDRESS + offset, stats.earthResistance);
};

const overwriteParty = (data: DataView, party: PartyState) => {
  overwriteCharacter(data, 0, party.chen);
  overwriteCharacter(data, 0x3c, party.yu);
  overwriteCharacter(data, 0x3c * 2, party.tuoba);
  overwriteCharacter(data, 0x3c * 3, party.chang);
};

export const overwriteGameInfo = (buffer: ArrayBuffer, info: GameInfo) => {
  const data = new DataView(buffer);

  overwriteGame(data, info.game);
  overwriteParty(data, info.party);
};
