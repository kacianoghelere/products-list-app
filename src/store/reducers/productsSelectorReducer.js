import { combineReducers } from 'redux'

import * as ActionTypes from '../actions/types'

const paginationInitialState = {
  loading: false,
  page: 1,
  totalPages: 1
}

function pagination(state = paginationInitialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOADING_PRODUCTS_FOR_SELECTOR:
      return {
        ...state,
        loading: action.value
      }
    case ActionTypes.SET_PRODUCTS_SELECTOR_PAGE:
      return {
        ...state,
        page: action.page
      }
    case ActionTypes.SET_PRODUCTS_SELECTOR_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages
      }
    default:
      return state
  }
}

const filtersInitialState = {
  name: '',
  minPrice: 0,
  maxPrice: 0
}

function filters(state = filtersInitialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS_SELECTOR_FILTER:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}

function showSelector(state = false, action) {
  switch (action.type) {
    case ActionTypes.SHOW_PRODUCTS_SELECTOR:
      return true
    case ActionTypes.HIDE_PRODUCTS_SELECTOR:
      return false
    default:
      return state
  }
}

const productsInitialState = {}

function products(state = productsInitialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS_FOR_SELECTOR:
      return {
        ...state,
        ...action.products
      }
    case ActionTypes.TOGGLE_PRODUCT_SELECTION:
      return {
        ...state,
        [action.productId]: {
          ...state[action.productId],
          selected: action.isSelected
        }
      }
    case ActionTypes.RESET_PRODUCTS_FOR_SELECTOR:
      return productsInitialState
    default:
      return state
  }
}

export default combineReducers({
  filters,
  pagination,
  showSelector,
  products
})