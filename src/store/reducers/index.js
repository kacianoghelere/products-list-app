import { combineReducers } from 'redux'

import authentication from './authenticationReducer'
import loading from './loadingReducer'
import listProducts from './listProductsReducer'
import myLists from './myListsReducer'
import products from './productsReducer'
import pagination from './paginationReducer'

export default combineReducers({
  authentication,
  loading,
  listProducts,
  myLists,
  products,
  pagination
})