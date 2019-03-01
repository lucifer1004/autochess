export interface Chess {}

export interface GameInfo {
  locked: boolean
  chessBoard: string[]
  gold: number
  round: number
  battlefield: Chess[]
  preparation: Chess[]
  shop: Chess[]
}

export interface State {
  gameInfo: GameInfo
}

export interface Skill {
  name: string
}

export interface Hero {
  name: string
  class: string[]
  cost: number
  skill: Skill
}

export interface Position {
  row: number
  col: number
}
