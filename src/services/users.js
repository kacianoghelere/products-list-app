import httpClient, { parseData } from './api'

export function getUser(id) {
  return httpClient.get(`/users/${id}`).then(parseData)
}

export function updateUser(id, params = {}) {
  return httpClient.put(`/users/${id}`, params).then(parseData)
}