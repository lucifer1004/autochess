import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex)

const gameInfo = sessionStorage.getItem('autochess-game-info')

const localState = {
  gameInfo: gameInfo
    ? JSON.parse(gameInfo)
    : {
        chessBoard: Array.from({length: 64}, (v, i) => 'Grass'),
        gold: 0,
        round: 0,
        heroes: [],
        shop: [],
      },
}

export default new Vuex.Store({
  state: localState,
  mutations: mutations,
  actions: actions,
  strict: true,
})
