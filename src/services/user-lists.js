import httpClient from './api'

export function getUserLists(userId) {
  return httpClient.get(`/user-lists/${userId}/lists`)
}

export function getMyLists() {
  return httpClient.get(`/user-lists/my-lists`)
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