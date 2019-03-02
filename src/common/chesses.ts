import {Chess} from '@/common/types'

export const CHESSES_ONE: Chess[] = [
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
].map(obj => Object.assign(obj, {cost: 1, star: 1}))

export const CHESSES_TWO: Chess[] = [
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
].map(obj => Object.assign(obj, {cost: 2, star: 1}))

export const CHESSES_THREE: Chess[] = [
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
].map(obj => Object.assign(obj, {cost: 3, star: 1}))

export const CHESSES_FOUR: Chess[] = [
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
].map(obj => Object.assign(obj, {cost: 4, star: 1}))

export const CHESSES_FIVE: Chess[] = [
  {
    name: 'Lich',
    isUndead: true,
    isMage: true,
  },
].map(obj => Object.assign(obj, {cost: 5, star: 1}))

export const CHESSES_ALL = [
  ...CHESSES_ONE,
  ...CHESSES_TWO,
  ...CHESSES_THREE,
  ...CHESSES_FOUR,
  ...CHESSES_FIVE,
]
