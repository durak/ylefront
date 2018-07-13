import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import itemReducer from './reducers/itemReducer'
import categoryReducer from './reducers/categoryReducer'

const reducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store