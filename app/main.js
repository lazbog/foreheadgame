import Vue from 'nativescript-vue'
import router from './router';
import Vuex from 'vuex'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.use(Vuex)

new Vue({
  render: h => h('frame', [h(router['welcome'])])
}).$start()
