export class Message {
  title: String
  button: String
  constructor(title: String, button: String) {
    this.title = title
    this.button = button
  }
}

export interface GameInfo {
  chessBoard: string[]
  gold: number
  round: number
}

export interface State {
  isPlaying: boolean
  gameInfo: GameInfo
}
