import {CHESSES_ALL} from '@/common/constants'
import * as MUTATION from '@/common/mutation-types'
import {Chess, Position, State} from '@/common/types'

const getRandomChess = (star: number): Chess => {
  return CHESSES_ALL[Math.floor(Math.random() * CHESSES_ALL.length)]
}

export default {
  [MUTATION.TOGGLE_LOCKED](state: State) {
    state.gameInfo.locked = !state.gameInfo.locked
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
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
    if (state.gameInfo.gold < 100) {
      // Interest
      state.gameInfo.gold += Math.min(Math.trunc(state.gameInfo.gold / 10), 5)

      // Basic income
      state.gameInfo.gold += Math.min(state.gameInfo.round, 5)

      // Set upper limit
      state.gameInfo.gold = Math.min(state.gameInfo.gold, 100)
    }

    if (!state.gameInfo.locked)
      state.gameInfo.shop = Array.from({length: 5}, (v, k) => getRandomChess(1))

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
  [MUTATION.BUY_CHESS](state: State, num: number) {
    const chess = state.gameInfo.shop[num]
    if (chess === null) return
    if (state.gameInfo.gold < chess.cost) return
    if (state.gameInfo.preparation.length >= 8) return
    state.gameInfo.gold -= chess.cost
    state.gameInfo.preparation.push(chess)
    state.gameInfo.shop[num] = null
    state.gameInfo.shop = state.gameInfo.shop.slice()
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.SELL_CHESS](state: State, num: number) {
    const chess = state.gameInfo.preparation[num]
    if (chess === null) return
    state.gameInfo.gold += chess.cost
    state.gameInfo.preparation.splice(num, 1)
    state.gameInfo.preparation = state.gameInfo.preparation.slice()
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.REFRESH_SHOP](state: State) {
    if (state.gameInfo.gold < 2) return
    state.gameInfo.gold -= 2
    state.gameInfo.shop = Array.from({length: 5}, (v, k) => getRandomChess(1))
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.RESET](state: State) {
    state.gameInfo = {
      locked: false,
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
