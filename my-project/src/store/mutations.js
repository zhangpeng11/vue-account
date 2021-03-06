export default {
  ADD_ITEM (state, text) {
    let newItem = {
      payNum: text.payNum,
      payDate: text.payDate,
      payType: text.payType
    }
    state.ListData.push(newItem)
    state.activeItem = newItem
  },

  ACTIVE_ITEM (state, item) {
    debugger
    if (!item) {
      debugger
      state.activeItem = state.ListData[0]
    } else {
      state.activeItem = item
    }
  },

  DELETE_ITEM (state) {
    state.ListData.$remove(state.activeItem)
    state.activeItem = state.listData[0]
  },

  EDIT_ITEM (state, text) {
    state.activeItem.payNum = text.payNum
    state.activeItem.payDate = text.payDate
    state.activeItem.payType = text.payType
  }
}
