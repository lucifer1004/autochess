import {Chess} from '@/common/types'

const CHESSES_1C1S: Chess[] = [
  {
    name: 'Axe',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'DrowRanger',
    isUndead: true,
    isHunter: true,
  },
  {
    name: 'Tiny',
    isElemental: true,
    isWarrior: true,
  },
  {
    name: 'Clockwerk',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Tusk',
    isBeast: true,
    isWarrior: true,
  },
  {
    name: 'BountyHunter',
    isGoblin: true,
    isAssassin: true,
  },
  {
    name: 'AntiMage',
    isElf: true,
    isDemonHunter: true,
  },
  {
    name: 'BatRider',
    isTroll: true,
    isKnight: true,
  },
  {
    name: 'Enchantress',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'OgreMagi',
    isOgre: true,
    isMage: true,
  },
  {
    name: 'ShadowShaman',
    isTroll: true,
    isShaman: true,
  },
  {
    name: 'Tinker',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 1, star: 1}))

const CHESSES_2C1S: Chess[] = [
  {
    name: 'BeastMaster',
    isOrc: true,
    isHunter: true,
  },
  {
    name: 'Juggernaut',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'TreantProtector',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'Morphling',
    isElemental: true,
    isAssassin: true,
  },
  {
    name: 'Puck',
    isDragon: true,
    isElf: true,
    isMage: true,
  },
  {
    name: 'CrystalMaiden',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Timbersaw',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Slardar',
    isNaga: true,
    isWarrior: true,
  },
  {
    name: 'ChaosKnight',
    isDemon: true,
    isKnight: true,
  },
  {
    name: 'Luna',
    isElf: true,
    isKnight: true,
  },
  {
    name: 'Slark',
    isNaga: true,
    isAssassin: true,
  },
  {
    name: 'NaturesProphet',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'QueenOfPain',
    isDemon: true,
    isAssassin: true,
  },
  {
    name: 'WitchDoctor',
    isTroll: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 2, star: 1}))

const CHESSES_3C1S: Chess[] = [
  {
    name: 'Lycan',
    isBeast: true,
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Abaddon',
    isUndead: true,
    isKnight: true,
  },
  {
    name: 'OmniKnight',
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'SandKing',
    isBeast: true,
    isAssassin: true,
  },
  {
    name: 'Riki',
    isSatyr: true,
    isAssassin: true,
  },
  {
    name: 'Mirana',
    isElf: true,
    isHunter: true,
  },
  {
    name: 'Sniper',
    isDwarf: true,
    isHunter: true,
  },
  {
    name: 'PhantomAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'Razor',
    isElemental: true,
    isMage: true,
  },
  {
    name: 'ShadowFiend',
    isDemon: true,
    isWarlock: true,
  },
  {
    name: 'TerrorBlade',
    isDemon: true,
    isDemonHunter: true,
  },
  {
    name: 'Venomanger',
    isBeast: true,
    isWarlock: true,
  },
  {
    name: 'Viper',
    isDragon: true,
    isAssassin: true,
  },
  {
    name: 'Lina',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'WindRanger',
    isElf: true,
    isHunter: true,
  },
].map(obj => Object.assign(obj, {cost: 3, star: 1}))

const CHESSES_4C1S: Chess[] = [
  {
    name: 'Alchemist',
    isGoblin: true,
    isWarlock: true,
  },
  {
    name: 'DragonKnight',
    isDragon: true,
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'Kunkka',
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Doom',
    isDemon: true,
    isWarrior: true,
  },
  {
    name: 'TemplarAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'LoneDruid',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'Medusa',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'TrollWarlord',
    isTroll: true,
    isWarrior: true,
  },
  {
    name: 'Disruptor',
    isOrc: true,
    isShaman: true,
  },
  {
    name: 'KeeperOfTheLight',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Necrophos',
    isUndead: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 4, star: 1}))

const CHESSES_5C1S: Chess[] = [
  {
    name: 'Lich',
    isUndead: true,
    isMage: true,
  },
  {
    name: 'TideHunter',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'Gyrocopter',
    isDwarf: true,
    isMech: true,
  },
  {
    name: 'DeathProphet',
    isUndead: true,
    isWarlock: true,
  },
  {
    name: 'Enigma',
    isElemental: true,
    isWarlock: true,
  },
  {
    name: 'Techies',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 5, star: 1}))

const CHESSES_1S = [
  CHESSES_1C1S,
  CHESSES_2C1S,
  CHESSES_3C1S,
  CHESSES_4C1S,
  CHESSES_5C1S,
]

const CHESSES_1C2S: Chess[] = [
  {
    name: 'Axe',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'DrowRanger',
    isUndead: true,
    isHunter: true,
  },
  {
    name: 'Tiny',
    isElemental: true,
    isWarrior: true,
  },
  {
    name: 'Clockwerk',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Tusk',
    isBeast: true,
    isWarrior: true,
  },
  {
    name: 'BountyHunter',
    isGoblin: true,
    isAssassin: true,
  },
  {
    name: 'AntiMage',
    isElf: true,
    isDemonHunter: true,
  },
  {
    name: 'BatRider',
    isTroll: true,
    isKnight: true,
  },
  {
    name: 'Enchantress',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'OgreMagi',
    isOgre: true,
    isMage: true,
  },
  {
    name: 'ShadowShaman',
    isTroll: true,
    isShaman: true,
  },
  {
    name: 'Tinker',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 3, star: 2}))

const CHESSES_2C2S: Chess[] = [
  {
    name: 'BeastMaster',
    isOrc: true,
    isHunter: true,
  },
  {
    name: 'Juggernaut',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'TreantProtector',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'Morphling',
    isElemental: true,
    isAssassin: true,
  },
  {
    name: 'Puck',
    isDragon: true,
    isElf: true,
    isMage: true,
  },
  {
    name: 'CrystalMaiden',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Timbersaw',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Slardar',
    isNaga: true,
    isWarrior: true,
  },
  {
    name: 'ChaosKnight',
    isDemon: true,
    isKnight: true,
  },
  {
    name: 'Luna',
    isElf: true,
    isKnight: true,
  },
  {
    name: 'Slark',
    isNaga: true,
    isAssassin: true,
  },
  {
    name: 'NaturesProphet',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'QueenOfPain',
    isDemon: true,
    isAssassin: true,
  },
  {
    name: 'WitchDoctor',
    isTroll: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 4, star: 2}))

const CHESSES_3C2S: Chess[] = [
  {
    name: 'Lycan',
    isBeast: true,
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Abaddon',
    isUndead: true,
    isKnight: true,
  },
  {
    name: 'OmniKnight',
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'SandKing',
    isBeast: true,
    isAssassin: true,
  },
  {
    name: 'Riki',
    isSatyr: true,
    isAssassin: true,
  },
  {
    name: 'Mirana',
    isElf: true,
    isHunter: true,
  },
  {
    name: 'Sniper',
    isDwarf: true,
    isHunter: true,
  },
  {
    name: 'PhantomAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'Razor',
    isElemental: true,
    isMage: true,
  },
  {
    name: 'ShadowFiend',
    isDemon: true,
    isWarlock: true,
  },
  {
    name: 'TerrorBlade',
    isDemon: true,
    isDemonHunter: true,
  },
  {
    name: 'Venomanger',
    isBeast: true,
    isWarlock: true,
  },
  {
    name: 'Viper',
    isDragon: true,
    isAssassin: true,
  },
  {
    name: 'Lina',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'WindRanger',
    isElf: true,
    isHunter: true,
  },
].map(obj => Object.assign(obj, {cost: 5, star: 2}))

const CHESSES_4C2S: Chess[] = [
  {
    name: 'Alchemist',
    isGoblin: true,
    isWarlock: true,
  },
  {
    name: 'DragonKnight',
    isDragon: true,
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'Kunkka',
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Doom',
    isDemon: true,
    isWarrior: true,
  },
  {
    name: 'TemplarAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'LoneDruid',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'Medusa',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'TrollWarlord',
    isTroll: true,
    isWarrior: true,
  },
  {
    name: 'Disruptor',
    isOrc: true,
    isShaman: true,
  },
  {
    name: 'KeeperOfTheLight',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Necrophos',
    isUndead: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 6, star: 2}))

const CHESSES_5C2S: Chess[] = [
  {
    name: 'Lich',
    isUndead: true,
    isMage: true,
  },
  {
    name: 'TideHunter',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'Gyrocopter',
    isDwarf: true,
    isMech: true,
  },
  {
    name: 'DeathProphet',
    isUndead: true,
    isWarlock: true,
  },
  {
    name: 'Enigma',
    isElemental: true,
    isWarlock: true,
  },
  {
    name: 'Techies',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 7, star: 2}))

const CHESSES_2S = [
  CHESSES_1C2S,
  CHESSES_2C2S,
  CHESSES_3C2S,
  CHESSES_4C2S,
  CHESSES_5C2S,
]

const CHESSES_1C3S: Chess[] = [
  {
    name: 'Axe',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'DrowRanger',
    isUndead: true,
    isHunter: true,
  },
  {
    name: 'Tiny',
    isElemental: true,
    isWarrior: true,
  },
  {
    name: 'Clockwerk',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Tusk',
    isBeast: true,
    isWarrior: true,
  },
  {
    name: 'BountyHunter',
    isGoblin: true,
    isAssassin: true,
  },
  {
    name: 'AntiMage',
    isElf: true,
    isDemonHunter: true,
  },
  {
    name: 'BatRider',
    isTroll: true,
    isKnight: true,
  },
  {
    name: 'Enchantress',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'OgreMagi',
    isOgre: true,
    isMage: true,
  },
  {
    name: 'ShadowShaman',
    isTroll: true,
    isShaman: true,
  },
  {
    name: 'Tinker',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 5, star: 3}))

const CHESSES_2C3S: Chess[] = [
  {
    name: 'BeastMaster',
    isOrc: true,
    isHunter: true,
  },
  {
    name: 'Juggernaut',
    isOrc: true,
    isWarrior: true,
  },
  {
    name: 'TreantProtector',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'Morphling',
    isElemental: true,
    isAssassin: true,
  },
  {
    name: 'Puck',
    isDragon: true,
    isElf: true,
    isMage: true,
  },
  {
    name: 'CrystalMaiden',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Timbersaw',
    isGoblin: true,
    isMech: true,
  },
  {
    name: 'Slardar',
    isNaga: true,
    isWarrior: true,
  },
  {
    name: 'ChaosKnight',
    isDemon: true,
    isKnight: true,
  },
  {
    name: 'Luna',
    isElf: true,
    isKnight: true,
  },
  {
    name: 'Slark',
    isNaga: true,
    isAssassin: true,
  },
  {
    name: 'NaturesProphet',
    isElf: true,
    isDruid: true,
  },
  {
    name: 'QueenOfPain',
    isDemon: true,
    isAssassin: true,
  },
  {
    name: 'WitchDoctor',
    isTroll: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 6, star: 3}))

const CHESSES_3C3S: Chess[] = [
  {
    name: 'Lycan',
    isBeast: true,
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Abaddon',
    isUndead: true,
    isKnight: true,
  },
  {
    name: 'OmniKnight',
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'SandKing',
    isBeast: true,
    isAssassin: true,
  },
  {
    name: 'Riki',
    isSatyr: true,
    isAssassin: true,
  },
  {
    name: 'Mirana',
    isElf: true,
    isHunter: true,
  },
  {
    name: 'Sniper',
    isDwarf: true,
    isHunter: true,
  },
  {
    name: 'PhantomAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'Razor',
    isElemental: true,
    isMage: true,
  },
  {
    name: 'ShadowFiend',
    isDemon: true,
    isWarlock: true,
  },
  {
    name: 'TerrorBlade',
    isDemon: true,
    isDemonHunter: true,
  },
  {
    name: 'Venomanger',
    isBeast: true,
    isWarlock: true,
  },
  {
    name: 'Viper',
    isDragon: true,
    isAssassin: true,
  },
  {
    name: 'Lina',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'WindRanger',
    isElf: true,
    isHunter: true,
  },
].map(obj => Object.assign(obj, {cost: 7, star: 3}))

const CHESSES_4C3S: Chess[] = [
  {
    name: 'Alchemist',
    isGoblin: true,
    isWarlock: true,
  },
  {
    name: 'DragonKnight',
    isDragon: true,
    isHuman: true,
    isKnight: true,
  },
  {
    name: 'Kunkka',
    isHuman: true,
    isWarrior: true,
  },
  {
    name: 'Doom',
    isDemon: true,
    isWarrior: true,
  },
  {
    name: 'TemplarAssassin',
    isElf: true,
    isAssassin: true,
  },
  {
    name: 'LoneDruid',
    isBeast: true,
    isDruid: true,
  },
  {
    name: 'Medusa',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'TrollWarlord',
    isTroll: true,
    isWarrior: true,
  },
  {
    name: 'Disruptor',
    isOrc: true,
    isShaman: true,
  },
  {
    name: 'KeeperOfTheLight',
    isHuman: true,
    isMage: true,
  },
  {
    name: 'Necrophos',
    isUndead: true,
    isWarlock: true,
  },
].map(obj => Object.assign(obj, {cost: 8, star: 3}))

const CHESSES_5C3S: Chess[] = [
  {
    name: 'Lich',
    isUndead: true,
    isMage: true,
  },
  {
    name: 'TideHunter',
    isNaga: true,
    isHunter: true,
  },
  {
    name: 'Gyrocopter',
    isDwarf: true,
    isMech: true,
  },
  {
    name: 'DeathProphet',
    isUndead: true,
    isWarlock: true,
  },
  {
    name: 'Enigma',
    isElemental: true,
    isWarlock: true,
  },
  {
    name: 'Techies',
    isGoblin: true,
    isMech: true,
  },
].map(obj => Object.assign(obj, {cost: 9, star: 3}))

const CHESSES_3S = [
  CHESSES_1C3S,
  CHESSES_2C3S,
  CHESSES_3C3S,
  CHESSES_4C3S,
  CHESSES_5C3S,
]

export const CHESSES = [CHESSES_1S, CHESSES_2S, CHESSES_3S]
