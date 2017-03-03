import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let state = {
  ListData: [],
  activeItem: {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
