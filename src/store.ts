import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_HERO, TOGGLE_PLAYING} from './common/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlaying: sessionStorage.getItem('is-autochess-playing') === 'playing',
    chessBoard: Array.from({length: 64}, (v, i) => 'Grass'),
  },
  mutations: {
    [ADD_HERO](state, payload) {
      state.chessBoard[(payload.row - 1) * 8 + payload.col - 1] = 'Alchemist'
      state.chessBoard = state.chessBoard.slice()
    },
    [TOGGLE_PLAYING](state) {
      state.isPlaying = !state.isPlaying
      sessionStorage.setItem(
        'is-autochess-playing',
        state.isPlaying ? 'playing' : '',
      )
    },
  },
  actions: {},
  strict: true,
})
