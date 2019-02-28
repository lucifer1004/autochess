import * as MUTATION from '@/common/mutation-types'
import {State} from '@/common/types'

interface Position {
  row: number
  col: number
}

export default {
  [MUTATION.ADD_HERO](state: State, payload: Position) {
    state.gameInfo.chessBoard[(payload.row - 1) * 8 + payload.col - 1] =
      'Alchemist'
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
    if (state.isPlaying) state.gameInfo.round += 1
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.MOVE_CHESS](state: State, payload: {from: Position; to: Position}) {
    const from = (payload.from.row - 1) * 8 + payload.from.col - 1
    const to = (payload.to.row - 1) * 8 + payload.to.col - 1
    if (state.gameInfo.chessBoard[to] === 'Grass') {
      state.gameInfo.chessBoard[to] = state.gameInfo.chessBoard[from]
      state.gameInfo.chessBoard[from] = 'Grass'
      state.gameInfo.chessBoard = state.gameInfo.chessBoard.slice()
      sessionStorage.setItem(
        'autochess-game-info',
        JSON.stringify(state.gameInfo),
      )
    }
  },
  [MUTATION.RESET](state: State) {
    state.gameInfo = {
      chessBoard: Array.from({length: 64}, (v, i) => 'Grass'),
      gold: 0,
      round: 0,
    }
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.TOGGLE_PLAYING](state: State) {
    state.isPlaying = !state.isPlaying
    sessionStorage.setItem(
      'autochess-playing',
      state.isPlaying ? 'playing' : '',
    )
    if (!state.isPlaying) sessionStorage.removeItem('autochess-game-info')
  },
}
