
import { itemsNewQuery } from './itemReducer'

const queryFilterReducer = (state = { order: 'publication.starttime:desc', type: 'Kaikki' }, action) => {
  switch (action.type) {
    case 'QUERY_SEARCH': {
      return { ...state, search: action.search }
    }
    case 'QUERY_ORDER': {
      return { ...state, order: state.order === 'publication.starttime:desc' ? 'publication.starttime:asc' : 'publication.starttime:desc' }
    }
    case 'QUERY_TYPE': {
      switch (state.type) {
        case 'Kaikki':
          return { ...state, type: 'program' }
        case 'program':
          return { ...state, type: 'clip' }
        default:
          return { ...state, type: 'Kaikki' }
      }
    }


    default:
      return state
  }
}

//----------------ACTION CREATORS-------------------

export const searchFilterChange = (search) => {
  return (dispatch) => {
    console.log(search)
    dispatch({ type: 'QUERY_SEARCH', search })
    dispatch(itemsNewQuery())
  }
}

export const orderFilterToggle = () => {
  return (dispatch) => {
    dispatch({ type: 'QUERY_ORDER' })
    dispatch(itemsNewQuery())
  }
}

export const typeFilterToggle = () => {
  return (dispatch) => {
    dispatch({ type: 'QUERY_TYPE' })
    dispatch(itemsNewQuery())
  }
}



export default queryFilterReducer