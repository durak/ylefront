import categoryService from '../services/categories'

const initialState = { tv: { children: [] }, radio: { children: [] }, analytics: { children: [] } }
const categoryReducer = (state =initialState, action) => {
  switch (action.type) {
    case 'CATEGORIES_GET': {      
      return { tv: action.categories[0], radio: action.categories[1], analytics: action.categories[2] }
    }
    default:
      return state
  }
}

//----------------ACTION CREATORS-------------------

export const categoriesGet = () => {
  return async (dispatch) => {
    try {
      const categories = await categoryService.getCategories()      
      dispatch({ type: 'CATEGORIES_GET', categories })
    } catch (exception) {
      console.log(exception)
    }
  }
}

export default categoryReducer