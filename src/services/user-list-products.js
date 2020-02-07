import httpClient, { parseData } from './api'

const getListProductUrl = (userListId, productId) => {
  return `/user-list-products/${userListId}/product/${productId}`
}

export function getListProducts(userListId, params = {}) {
  const queryString = new URLSearchParams(params).toString()

  const url = `/user-list-products/${userListId}?${queryString}`

  return httpClient.get(url).then(parseData)
}

export function findListProduct(userListId, productId) {
  const url = getListProductUrl(userListId, productId)

  return httpClient.get(url).then(parseData)
}

export function addListProduct(userListId, productId, params = {}) {
  const url = getListProductUrl(userListId, productId)

  return httpClient.post(url, params).then(parseData)
}

export function updateListProduct(userListId, productId, params = {}) {
  const url = getListProductUrl(userListId, productId)

  return httpClient.put(url, params).then(parseData)
}

export function removeListProduct(userListId, productId) {
  const url = getListProductUrl(userListId, productId)

  return httpClient.delete(url).then(parseData)
}