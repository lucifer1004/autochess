import {Chess} from '@/common/types'

export const CHESSES_ONE: Chess[] = [
  {
    name: 'Axe',
    cost: 1,
    star: 1,
    isOrc: true,
    isWarrior: true,
  },
]

export const CHESSES_TWO: Chess[] = [
  {
    name: 'BeastMaster',
    cost: 2,
    star: 1,
    isHunter: true,
    isOrc: true,
  },
]

export const CHESSES_THREE: Chess[] = [
  {
    name: 'Lycan',
    cost: 3,
    star: 1,
    isBeast: true,
    isHuman: true,
    isWarrior: true,
  },
]

export const CHESSES_FOUR: Chess[] = [
  {
    name: 'Alchemist',
    cost: 4,
    star: 1,
  },
]

export const CHESSES_FIVE: Chess[] = [
  {
    name: 'Lich',
    cost: 5,
    star: 1,
  },
]

export const CHESSES_ALL = [
  ...CHESSES_ONE,
  ...CHESSES_TWO,
  ...CHESSES_THREE,
  ...CHESSES_FOUR,
  ...CHESSES_FIVE,
]
