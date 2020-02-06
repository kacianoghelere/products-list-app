import jwtDecode from 'jwt-decode'

import * as ActionTypes from '../actions/types'

const initialState = {
  authenticatingUser: false,
  token: '',
  user: {}
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_AUTHENTICATING_USER:
      return {
        ...state,
        authenticatingUser: action.value
      }
    case ActionTypes.SET_AUTH_TOKEN:
      localStorage.setItem('PRODUCT_LIST_AUTH_TOKEN', action.token)

      const { id, name } = jwtDecode(action.token)

      return {
        ...state,
        token: action.token,
        user: { id, name }
      }
    case ActionTypes.RESET_AUTH_TOKEN:
      localStorage.removeItem('PRODUCT_LIST_AUTH_TOKEN')

      return initialState
    default:
      return state
  }
}