import swal from 'sweetalert'

import * as AuthService from '../../services/auth';
import * as ActionTypes from './types';

export const setAuthenticatingUser = (value) => ({
  type: ActionTypes.SET_AUTHENTICATING_USER,
  value
})

export const setAuthToken = (token) => ({
  type: ActionTypes.SET_AUTH_TOKEN,
  token
})

export function signIn(params = {}) {
  return async (dispatch) => {
    try {
      dispatch(setAuthenticatingUser(true))

      const { data: { token } } = await AuthService.signIn(params)

      dispatch(setAuthToken(token))
    } catch (error) {
      console.error('signIn', error)

      const { response: { data: { message = '' } } } = error

      swal({
        title: 'Falha ao autenticar suas credênciais',
        text: message,
        icon: 'error'
      })
    } finally {
      dispatch(setAuthenticatingUser(false))
    }
  }
}

export function signUp(params = {}) {
  return async (dispatch) => {
    try {
      dispatch(setAuthenticatingUser(true))

      const { data: { token } } = await AuthService.signUp(params)

      dispatch(setAuthToken(token))
    } catch (error) {
      console.error('signUp', error)

      const { response: { data: { message = '' } } } = error

      swal({
        title: 'Falha ao criar sua conta',
        text: message,
        icon: 'error'
      })
    } finally {
      dispatch(setAuthenticatingUser(false))
    }
  }
}