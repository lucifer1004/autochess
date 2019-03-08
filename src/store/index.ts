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
        gold: 0,
        round: 0,
        level: 0,
        exp: 0,
        hp: 100,
        effects: {},
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
