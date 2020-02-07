import { combineReducers } from 'redux'

import authentication from './authenticationReducer'
import productsSelector from './productsSelectorReducer'
import productsByList from './productsByListReducer'
import myLists from './myListsReducer'
import pagination from './paginationReducer'

export default combineReducers({
  authentication,
  productsSelector,
  productsByList,
  myLists,
  pagination
})