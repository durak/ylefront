import itemService from '../services/items'
import queryBuilder from '../utils/queryBuilder'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_INIT':
      return action.items
    case 'ITEMS_GET_MORE':
      return state.concat(action.items)

    default:
      return state
  }
}

//----------------ACTION CREATORS-------------------

export const itemsGetMore = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const query = queryBuilder(state, true)
      const items = await itemService.getItemsWithQuery(query)
      dispatch({ type: 'ITEMS_GET_MORE', items })
    } catch (exception) {
      console.log(exception)
    }
  }
}

export const itemsNewQuery = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const query = queryBuilder(state)
      const items = await itemService.getItemsWithQuery(query)
      dispatch({ type: 'ITEMS_INIT', items })
    } catch (exception) {
      console.log(exception)
    }
  }
}

export default itemReducer