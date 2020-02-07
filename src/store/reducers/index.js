import { combineReducers } from 'redux'

import authentication from './authenticationReducer'
import productsSelector from './productsSelectorReducer'
import listProducts from './listProductsReducer'
import myLists from './myListsReducer'
import products from './productsReducer'
import pagination from './paginationReducer'

export default combineReducers({
  authentication,
  productsSelector,
  listProducts,
  myLists,
  products,
  pagination
})