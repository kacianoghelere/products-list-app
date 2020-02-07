import httpClient, { parseData } from './api'

const getUserListProductUrl = (userListId, productId) => {
  return `/user-list-products/${userListId}/product/${productId}`
}

export function getUserListProducts(userListId) {
  return httpClient.get(`/user-list-products/${userListId}`).then(parseData)
}

export function findUserListProduct(userListId, productId) {
  const url = getUserListProductUrl(userListId, productId)

  return httpClient.get(url).then(parseData)
}

export function createUserList(userListId, productId, params = {}) {
  const url = getUserListProductUrl(userListId, productId)

  return httpClient.post(url, params).then(parseData)
}

export function updateUserList(userListId, productId, params = {}) {
  const url = getUserListProductUrl(userListId, productId)

  return httpClient.put(url, params).then(parseData)
}

export function destroyUserList(userListId, productId) {
  const url = getUserListProductUrl(userListId, productId)

  return httpClient.delete(url).then(parseData)
}