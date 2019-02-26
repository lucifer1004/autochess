export class Message {
  title: String
  button: String
  constructor(title: String, button: String) {
    this.title = title
    this.button = button
  }
}

export interface State {
  isPlaying: boolean
  chessBoard: string[]
}
