import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
