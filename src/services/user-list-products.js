import httpClient from './api'

const getUserListProductUrl = (userListId, productId) => {
  return `/user-list-products/${userListId}/product/${productId}`
}

export function getUserListProducts(userListId) {
  return httpClient.get(`/user-list-products/${userListId}`)
}

export function findUserListProduct(userListId, productId) {
  return httpClient.get(getUserListProductUrl(userListId, productId))
}

export function createUserList(userListId, productId, params = {}) {
  return httpClient.post(getUserListProductUrl(userListId, productId), params)
}

export function updateUserList(userListId, productId, params = {}) {
  return httpClient.put(getUserListProductUrl(userListId, productId), params)
}

export function destroyUserList(userListId, productId) {
  return httpClient.delete(getUserListProductUrl(userListId, productId))
}