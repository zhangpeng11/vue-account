import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let state = {
  ListData: [
    {
      payNum: '10',
      payDate: '20170112',
      payType: '住宿'
    },
    {
      payNum: '10',
      payDate: '20170112',
      payType: '住宿'
    }
  ],
  activeItem: {}
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
