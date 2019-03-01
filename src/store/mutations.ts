import * as MUTATION from '@/common/mutation-types'
import {Chess, Position, State} from '@/common/types'

export default {
  [MUTATION.ADD_HERO](state: State, payload: Position) {
    state.gameInfo.chessBoard[(payload.row - 1) * 8 + payload.col - 1] =
      'DragonKnight'
    state.gameInfo.chessBoard = state.gameInfo.chessBoard.slice()
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.CHANGE_GOLD](state: State, payload: {change: number}) {
    state.gameInfo.gold += payload.change
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.INCREASE_ROUND](state: State) {
    state.gameInfo.round += 1
    if (state.gameInfo.gold >= 100) return

    // Interest
    state.gameInfo.gold += Math.min(Math.trunc(state.gameInfo.gold / 10), 5)

    // Basic income
    state.gameInfo.gold += Math.min(state.gameInfo.round, 5)

    state.gameInfo.gold = Math.min(state.gameInfo.gold, 100)

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.MOVE_CHESS](state: State, payload: {from: Position; to: Position}) {
    const from = (payload.from.row - 1) * 8 + payload.from.col - 1
    const to = (payload.to.row - 1) * 8 + payload.to.col - 1
    if (state.gameInfo.chessBoard[to] === '') {
      state.gameInfo.chessBoard[to] = state.gameInfo.chessBoard[from]
      state.gameInfo.chessBoard[from] = ''
      state.gameInfo.chessBoard = state.gameInfo.chessBoard.slice()
      sessionStorage.setItem(
        'autochess-game-info',
        JSON.stringify(state.gameInfo),
      )
    }
  },
  [MUTATION.BUY_CHESS](state: State, payload: Chess) {

  },
  [MUTATION.RESET](state: State) {
    state.gameInfo = {
      chessBoard: Array.from({length: 64}, (v, i) => ''),
      gold: 0,
      round: 0,
      battlefield: [],
      preparation: [],
      shop: [],
    }
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
}
