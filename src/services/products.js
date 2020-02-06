import httpClient from './api'

export function getProducts(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return httpClient.get(`/products?${queryString}`)
}

export function findProduct(id) {
  return httpClient.get(`/user-lists/${id}`)
}

export function createProduct(params = {}) {
  return httpClient.post('/user-lists', params)
}

export function updateProduct(id, params = {}) {
  return httpClient.put(`/user-lists/${id}`, params)
}

export function destroyProduct(id) {
  return httpClient.delete(`/user-lists/${id}`)
}