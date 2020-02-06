import * as ActionTypes from '../actions/types'

const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS_LIST:
      return {
        ...state,
        ...action.productsList
      }
    case ActionTypes.RESET_PRODUCTS_LIST:
      return initialState
    default:
      return state
  }
}