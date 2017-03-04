export default {
  addItem ({commit}) {
    commit('ADD_ITEM')
  },

  deleteItem ({commit}) {
    commit('DELETE_ITEM')
  },

  editItem ({commit}, e) {
    commit('EDIT_ITEM', e.target.text)
  },

  activeItem ({commit, item}) {
    debugger
    commit('ACTIVE_ITEM', item)
  }
}
