export const addItem = ({dispatch}) => {
  dispatch('ADD_ITEM')
}

export const deleteItem = ({dispatch}) => {
  dispatch('DELETE_ITEM')
}

export const editItem = ({dispatch}, e) => {
  dispatch('EDIT_ITEM', e.target.text)
}
