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
        locked: false,
        chessBoard: Array.from({length: 64}, (v, i) => ''),
        gold: 0,
        round: 0,
        battlefield: [],
        preparation: [],
        shop: [],
      },
}

export default new Vuex.Store({
  state: localState,
  mutations: mutations,
  actions: actions,
  strict: true,
})
