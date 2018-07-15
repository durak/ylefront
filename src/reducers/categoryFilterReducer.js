
import { itemsNewQuery } from './itemReducer'

const categoryFilterReducer = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER_POSITIVE': {
      return state.concat({ ...action.category, status: '+' })
    }
    case 'CATEGORY_FILTER_NEGATIVE':
      return state.map(c => c.id !== action.category.id ? c : { ...c, status: '-' })
    case 'CATEGORY_FILTER_REMOVE':
      return state.filter(c => c.id !== action.category.id)
    default:
      return state
  }
}

//----------------ACTION CREATORS-------------------

export const categoryFilterToggle = (category) => {
  return (dispatch) => {

    if (category.status === '+') {
      dispatch({ type: 'CATEGORY_FILTER_NEGATIVE', category })
    } else if (category.status === '-') {
      dispatch({ type: 'CATEGORY_FILTER_REMOVE', category })
    } else {
      dispatch({ type: 'CATEGORY_FILTER_POSITIVE', category })
    }

    dispatch(itemsNewQuery())
  }
}

export const mainCategoryFilterToggle = (category) => {
  return (dispatch) => {
    console.log('happens', category.children)
    if (category.status === '-') {
      dispatch({ type: 'CATEGORY_FILTER_REMOVE', category })

      category.children.forEach((category) => {
        dispatch({ type: 'CATEGORY_FILTER_REMOVE', category })
      })
      
    } else {
      dispatch({ type: 'CATEGORY_FILTER_POSITIVE', category })
      dispatch({ type: 'CATEGORY_FILTER_NEGATIVE', category })

      category.children.forEach((category) => {
        dispatch({ type: 'CATEGORY_FILTER_POSITIVE', category })
        dispatch({ type: 'CATEGORY_FILTER_NEGATIVE', category })
      })
    }

    dispatch(itemsNewQuery())
  }
}

export default categoryFilterReducer