export interface Position {
  row: number
  col: number
}

export interface Chess {
  name: string
  cost: number
  star: number
  health?: number
  mana?: number
  healthRemaining?: number
  manaRemaining?: number
  attack?: number
  attackSpeed?: number
  defence?: number
  resistance?: number
  dodge?: number
  position?: Position
  isBeast?: boolean
  isDemon?: boolean
  isDragon?: boolean
  isDwarf?: boolean
  isElemental?: boolean
  isElf?: boolean
  isGoblin?: boolean
  isHuman?: boolean
  isNaga?: boolean
  isOgre?: boolean
  isOrc?: boolean
  isSatyr?: boolean
  isTroll?: boolean
  isUndead?: boolean
  isAssassin?: boolean
  isDemonHunter?: boolean
  idDruid?: boolean
  isHunter?: boolean
  isKnight?: boolean
  isMage?: boolean
  isMech?: boolean
  isShaman?: boolean
  isWarlock?: boolean
  isWarrior?: boolean
}

export interface GameInfo {
  locked: boolean
  gold: number
  level: number
  exp: number
  round: number
  battlefield: Chess[]
  preparation: Chess[]
  shop: Array<Chess | null>
}

export interface State {
  gameInfo: GameInfo
}

export interface Skill {
  name: string
}
