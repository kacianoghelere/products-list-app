import httpClient, { parseData } from './api'

export function getProducts(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return httpClient.get(`/products?${queryString}`).then(parseData)
}

export function findProduct(id) {
  return httpClient.get(`/user-lists/${id}`).then(parseData)
}

export function createProduct(params = {}) {
  return httpClient.post('/user-lists', params).then(parseData)
}

export function updateProduct(id, params = {}) {
  return httpClient.put(`/user-lists/${id}`, params).then(parseData)
}

export function destroyProduct(id) {
  return httpClient.delete(`/user-lists/${id}`).then(parseData)
}