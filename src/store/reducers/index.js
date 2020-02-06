import { combineReducers } from 'redux'

import authentication from './authenticationReducer'
import loading from './loadingReducer'
import products from './productsReducer'
import pagination from './paginationReducer'

export default combineReducers({
  authentication,
  loading,
  products,
  pagination
})