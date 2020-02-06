import * as ActionTypes from '../actions/types'

const initialState = {}

export default function myList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_MY_LIST:
      return {
        ...state,
        ...action.products
      }
    case ActionTypes.RESET_MY_PRODUCTS_LIST:
      return initialState
    default:
      return state
  }
}