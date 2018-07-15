import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import itemReducer from './reducers/itemReducer'
import categoryReducer from './reducers/categoryReducer'
import categoryFilterReducer from './reducers/categoryFilterReducer'

const reducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer,
  categoryFilter: categoryFilterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store