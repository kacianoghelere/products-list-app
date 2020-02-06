import httpClient from './api'

export function getUser(id) {
  return httpClient.get(`/users/${id}`)
}

export function updateUser(id, params = {}) {
  return httpClient.put(`/users/${id}`, params)
}