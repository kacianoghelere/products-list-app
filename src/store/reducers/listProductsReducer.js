import * as ActionTypes from '../actions/types'

const initialState = {
  loading: false
}

export default function listProducts(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        [action.userListId]: {
          ...state[action.userListId],
          [action.product.id]: action.product
        }
      }
    case ActionTypes.UPDATE_PRODUCT_FROM_LIST:
      const updatedProduct = {
        ...state[action.userListId][action.product.id],
        ...action.product
      }

      return {
        ...state,
        [action.userListId]: {
          ...state[action.userListId],
          [action.product.id]: updatedProduct
        }
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_LIST:
      let listProducts = { ...state[action.userListId] }

      delete listProducts[action.productId]

      return {
        ...state,
        [action.userListId]: listProducts
      }
    case ActionTypes.SET_LIST_PRODUCTS:
      return {
        ...state,
        [action.userListId]: action.products
      }
    case ActionTypes.SET_LOADING_LIST_PRODUCTS:
      return {
        ...state,
        loading: action.value
      }
    case ActionTypes.RESET_ALL_LIST_PRODUCTS:
      return initialState
    default:
      return state
  }
}