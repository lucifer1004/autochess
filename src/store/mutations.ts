import {CHESSES_ALL} from '@/common/constants'
import * as MUTATION from '@/common/mutation-types'
import {Chess, Position, State} from '@/common/types'

const getRandomChess = (star: number): Chess => {
  return Object.assign(
    {},
    CHESSES_ALL[Math.floor(Math.random() * CHESSES_ALL.length)],
  )
}

export default {
  [MUTATION.TOGGLE_LOCKED](state: State) {
    state.gameInfo.locked = !state.gameInfo.locked
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
  [MUTATION.MOVE_CHESS](
    state: State,
    payload: {from: Position; targetPosition: Position},
  ) {
    // Return if there is already a chess at the target position
    if (
      state.gameInfo.battlefield.filter(
        chess =>
          chess.position &&
          chess.position.row === payload.targetPosition.row &&
          chess.position.col === payload.targetPosition.col,
      ).length > 0
    )
      return

    const chess = state.gameInfo.battlefield.filter(
      chess =>
        chess.position &&
        chess.position.row === payload.from.row &&
        chess.position.col === payload.from.col,
    )[0]
    chess.position = payload.targetPosition
    state.gameInfo.battlefield = state.gameInfo.battlefield.slice()
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.DISPATCH_CHESS](
    state: State,
    payload: {num: number; targetPosition: Position},
  ) {
    const chess = state.gameInfo.preparation[payload.num]
    if (chess === null) return

    // Return if there is already a chess at the target position
    if (
      state.gameInfo.battlefield.filter(
        chess =>
          chess.position &&
          chess.position.row === payload.targetPosition.row &&
          chess.position.col === payload.targetPosition.col,
      ).length > 0
    )
      return

    chess.position = payload.targetPosition
    state.gameInfo.battlefield.push(chess)
    state.gameInfo.preparation.splice(payload.num, 1)
    state.gameInfo.preparation = state.gameInfo.preparation.slice()
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.WITHDRAW_CHESS](state: State, from: Position) {
    // You should have room in the preparation room
    if (state.gameInfo.preparation.length >= 8) return

    const index = state.gameInfo.battlefield.findIndex(
      chess =>
        !!chess.position &&
        chess.position.row === from.row &&
        chess.position.col === from.col,
    )
    state.gameInfo.preparation.push(state.gameInfo.battlefield[index])
    state.gameInfo.battlefield.splice(index, 1)
  },
  [MUTATION.BUY_CHESS](state: State, num: number) {
    const chess = state.gameInfo.shop[num]
    if (chess === null) return

    // You should have enough gold to buy the chess
    if (state.gameInfo.gold < chess.cost) return

    // You should have room in the preparation room
    if (state.gameInfo.preparation.length >= 8) return

    // Buying chess consumes gold
    state.gameInfo.gold -= chess.cost

    // The chess will go to preparation room first
    state.gameInfo.preparation.push(chess)

    // Remove the chess from the shop
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
    state.gameInfo.gold = Math.min(state.gameInfo.gold + chess.cost, 100)
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
