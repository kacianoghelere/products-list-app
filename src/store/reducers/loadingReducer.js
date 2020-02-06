import * as ActionTypes from '../actions/types'

const initialState = {
  loadingProductsList: false
}

export default function loading(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOADING_PRODUCTS_LIST:
      return {
        ...state,
        loadingProductsList: action.value
      }
    default:
      return state
  }
}