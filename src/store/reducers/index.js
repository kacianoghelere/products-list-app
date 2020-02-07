import { combineReducers } from 'redux'

import authentication from './authenticationReducer'
import loading from './loadingReducer'
import myLists from './myListsReducer'
import products from './productsReducer'
import pagination from './paginationReducer'

export default combineReducers({
  authentication,
  loading,
  myLists,
  products,
  pagination
})