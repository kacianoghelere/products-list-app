import httpClient from './api'

export function ping() {
  return httpClient.get('/ping')
}

export function signIn(params = {}) {
  return httpClient.post('/sign-in', params)
}

export function signUp(params = {}) {
  return httpClient.post('/sign-up', params)
}