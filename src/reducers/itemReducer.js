import itemService from '../services/items'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_GET':
      return state.concat(action.items)

    default:
      return state
  }
}

//----------------ACTION CREATORS-------------------

export const itemsGet = () => {
  return async (dispatch) => {
    try {
      const items = await itemService.getItems()
      dispatch({ type: 'ITEMS_GET', items })
    } catch (exception) {
      console.log(exception)
    }
  }
}

export default itemReducer