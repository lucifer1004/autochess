import {Chess, ChessProperty} from '@/common/types'

const CHESSES_1C = [
  {
    name: 'Axe',
    Orc: true,
    Warrior: true,
  },
  {
    name: 'DrowRanger',
    Undead: true,
    Hunter: true,
  },
  {
    name: 'Tiny',
    Elemental: true,
    Warrior: true,
  },
  {
    name: 'Clockwerk',
    Goblin: true,
    Mech: true,
  },
  {
    name: 'Tusk',
    Beast: true,
    Warrior: true,
  },
  {
    name: 'BountyHunter',
    Goblin: true,
    Assassin: true,
  },
  {
    name: 'AntiMage',
    Elf: true,
    DemonHunter: true,
  },
  {
    name: 'BatRider',
    Troll: true,
    Knight: true,
  },
  {
    name: 'Enchantress',
    Beast: true,
    Druid: true,
  },
  {
    name: 'OgreMagi',
    Ogre: true,
    Mage: true,
  },
  {
    name: 'ShadowShaman',
    Troll: true,
    Shaman: true,
  },
  {
    name: 'Tinker',
    Goblin: true,
    Mech: true,
  },
  {
    name: 'Mars',
    God: true,
    Soldier: true,
  },
]

const CHESSES_2C = [
  {
    name: 'BeastMaster',
    Orc: true,
    Hunter: true,
  },
  {
    name: 'Juggernaut',
    Orc: true,
    Warrior: true,
  },
  {
    name: 'Morphling',
    Elemental: true,
    Assassin: true,
  },
  {
    name: 'Puck',
    Dragon: true,
    Elf: true,
    Mage: true,
  },
  {
    name: 'CrystalMaiden',
    Human: true,
    Mage: true,
  },
  {
    name: 'Timbersaw',
    Goblin: true,
    Mech: true,
  },
  {
    name: 'Slardar',
    Naga: true,
    Warrior: true,
  },
  {
    name: 'ChaosKnight',
    Demon: true,
    Knight: true,
  },
  {
    name: 'Luna',
    Elf: true,
    Knight: true,
  },
  {
    name: 'Mirana',
    Elf: true,
    Hunter: true,
  },
  // {
  //   name: 'Slark',
  //   Naga: true,
  //   Assassin: true,
  // },
  {
    name: 'NaturesProphet',
    Elf: true,
    Druid: true,
  },
  {
    name: 'QueenOfPain',
    Demon: true,
    Assassin: true,
  },
  {
    name: 'WitchDoctor',
    Troll: true,
    Warlock: true,
  },
]

const CHESSES_3C = [
  {
    name: 'Lycan',
    Beast: true,
    Human: true,
    Warrior: true,
  },
  {
    name: 'Abaddon',
    Undead: true,
    Knight: true,
  },
  {
    name: 'OmniKnight',
    Human: true,
    Knight: true,
  },
  {
    name: 'TreantProtector',
    Elf: true,
    Druid: true,
  },
  // {
  //   name: 'SandKing',
  //   Beast: true,
  //   Assassin: true,
  // },
  // {
  //   name: 'Riki',
  //   Satyr: true,
  //   Assassin: true,
  // },
  {
    name: 'Sniper',
    Dwarf: true,
    Hunter: true,
  },
  {
    name: 'PhantomAssassin',
    Elf: true,
    Assassin: true,
  },
  {
    name: 'Razor',
    Elemental: true,
    Mage: true,
  },
  {
    name: 'ShadowFiend',
    Demon: true,
    Warlock: true,
  },
  {
    name: 'TerrorBlade',
    Demon: true,
    DemonHunter: true,
  },
  {
    name: 'Venomanger',
    Beast: true,
    Warlock: true,
  },
  {
    name: 'Viper',
    Dragon: true,
    Assassin: true,
  },
  {
    name: 'Lina',
    Human: true,
    Mage: true,
  },
  {
    name: 'WindRanger',
    Elf: true,
    Hunter: true,
  },
]

const CHESSES_4C = [
  {
    name: 'Alchemist',
    Goblin: true,
    Warlock: true,
  },
  {
    name: 'DragonKnight',
    Dragon: true,
    Human: true,
    Knight: true,
  },
  {
    name: 'Kunkka',
    Human: true,
    Warrior: true,
  },
  {
    name: 'Doom',
    Demon: true,
    Warrior: true,
  },
  {
    name: 'TemplarAssassin',
    Elf: true,
    Assassin: true,
  },
  {
    name: 'LoneDruid',
    Beast: true,
    Druid: true,
  },
  {
    name: 'Medusa',
    Naga: true,
    Hunter: true,
  },
  {
    name: 'TrollWarlord',
    Troll: true,
    Warrior: true,
  },
  {
    name: 'Disruptor',
    Orc: true,
    Shaman: true,
  },
  {
    name: 'KeeperOfTheLight',
    Human: true,
    Mage: true,
  },
  {
    name: 'Necrophos',
    Undead: true,
    Warlock: true,
  },
]

const CHESSES_5C = [
  {
    name: 'Lich',
    Undead: true,
    Mage: true,
  },
  {
    name: 'TideHunter',
    Naga: true,
    Hunter: true,
  },
  {
    name: 'Gyrocopter',
    Dwarf: true,
    Mech: true,
  },
  {
    name: 'DeathProphet',
    Undead: true,
    Warlock: true,
  },
  {
    name: 'Enigma',
    Elemental: true,
    Warlock: true,
  },
  {
    name: 'Techies',
    Goblin: true,
    Mech: true,
  },
]

const CHESSES_1C1S: Chess[] = JSON.parse(JSON.stringify(CHESSES_1C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 1, star: 1}),
)

const CHESSES_2C1S: Chess[] = JSON.parse(JSON.stringify(CHESSES_2C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 2, star: 1}),
)

const CHESSES_3C1S: Chess[] = JSON.parse(JSON.stringify(CHESSES_3C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 3, star: 1}),
)

const CHESSES_4C1S: Chess[] = JSON.parse(JSON.stringify(CHESSES_4C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 4, star: 1}),
)

const CHESSES_5C1S: Chess[] = JSON.parse(JSON.stringify(CHESSES_5C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 5, star: 1}),
)

const CHESSES_1S = [
  CHESSES_1C1S,
  CHESSES_2C1S,
  CHESSES_3C1S,
  CHESSES_4C1S,
  CHESSES_5C1S,
]

const CHESSES_1C2S: Chess[] = JSON.parse(JSON.stringify(CHESSES_1C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 3, star: 2}),
)

const CHESSES_2C2S: Chess[] = JSON.parse(JSON.stringify(CHESSES_2C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 4, star: 2}),
)

const CHESSES_3C2S: Chess[] = JSON.parse(JSON.stringify(CHESSES_3C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 5, star: 2}),
)

const CHESSES_4C2S: Chess[] = JSON.parse(JSON.stringify(CHESSES_4C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 6, star: 2}),
)

const CHESSES_5C2S: Chess[] = JSON.parse(JSON.stringify(CHESSES_5C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 7, star: 2}),
)

const CHESSES_2S = [
  CHESSES_1C2S,
  CHESSES_2C2S,
  CHESSES_3C2S,
  CHESSES_4C2S,
  CHESSES_5C2S,
]

const CHESSES_1C3S: Chess[] = JSON.parse(JSON.stringify(CHESSES_1C)).map(
  (obj: ChessProperty) =>
    obj.name === 'Enchantress'
      ? Object.assign(obj, {cost: 4, star: 3})
      : Object.assign(obj, {cost: 5, star: 3}),
)

const CHESSES_2C3S: Chess[] = JSON.parse(JSON.stringify(CHESSES_2C)).map(
  (obj: ChessProperty) =>
    obj.name === 'NaturesProphet'
      ? Object.assign(obj, {cost: 5, star: 3})
      : Object.assign(obj, {cost: 6, star: 3}),
)

const CHESSES_3C3S: Chess[] = JSON.parse(JSON.stringify(CHESSES_3C)).map(
  (obj: ChessProperty) =>
    obj.name === 'TreantProtector'
      ? Object.assign(obj, {cost: 6, star: 3})
      : Object.assign(obj, {cost: 7, star: 3}),
)

const CHESSES_4C3S: Chess[] = JSON.parse(JSON.stringify(CHESSES_4C)).map(
  (obj: ChessProperty) =>
    obj.name === 'LoneDruid'
      ? Object.assign(obj, {cost: 7, star: 3})
      : Object.assign(obj, {cost: 8, star: 3}),
)

const CHESSES_5C3S: Chess[] = JSON.parse(JSON.stringify(CHESSES_5C)).map(
  (obj: ChessProperty) => Object.assign(obj, {cost: 9, star: 3}),
)

const CHESSES_3S = [
  CHESSES_1C3S,
  CHESSES_2C3S,
  CHESSES_3C3S,
  CHESSES_4C3S,
  CHESSES_5C3S,
]

export const CHESSES = [CHESSES_1S, CHESSES_2S, CHESSES_3S]
