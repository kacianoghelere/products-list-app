import httpClient from './api'

export function getMyLists(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return httpClient.get(`/user-lists/my-lists?${queryString}`)
}

export function findUserList(id) {
  return httpClient.get(`/user-lists/${id}`)
}

export function createUserList(params = {}) {
  return httpClient.post('/user-lists', params)
}

export function updateUserList(id, params = {}) {
  return httpClient.put(`/user-lists/${id}`, params)
}

export function destroyUserList(id) {
  return httpClient.delete(`/user-lists/${id}`)
}