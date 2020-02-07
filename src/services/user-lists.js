import httpClient, { parseData } from './api'

export function getMyLists(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return httpClient.get(`/user-lists/my-lists?${queryString}`).then(parseData)
}

export function findUserList(id) {
  return httpClient.get(`/user-lists/${id}`).then(parseData)
}

export function createUserList(params = {}) {
  return httpClient.post('/user-lists', params).then(parseData)
}

export function updateUserList(id, params = {}) {
  return httpClient.put(`/user-lists/${id}`, params).then(parseData)
}

export function destroyUserList(id) {
  return httpClient.delete(`/user-lists/${id}`).then(parseData)
}