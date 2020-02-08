import * as ActionTypes from './types'
import * as ListProductsService from '../../services/user-list-products'
import * as UtilsService from '../../services/utils'

const setLoadingListProducts = (value) => ({
  type: ActionTypes.SET_LOADING_LIST_PRODUCTS,
  value
})

export const addProductToList = (userListId, product) => ({
  type: ActionTypes.ADD_PRODUCT_TO_LIST,
  userListId,
  product
})

export const removeProductFromList = (userListId, product) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_LIST,
  userListId,
  product
})

export const updateProductFromList = (userListId, product) => ({
  type: ActionTypes.UPDATE_PRODUCT_FROM_LIST,
  userListId,
  product
})

export const setListProducts = (userListId, products) => ({
  type: ActionTypes.SET_LIST_PRODUCTS,
  userListId,
  products
})

export const resetListProducts = () => ({
  type: ActionTypes.RESET_LIST_PRODUCTS
})

export const resetAllListProducts = () => ({
  type: ActionTypes.RESET_ALL_LIST_PRODUCTS
})

export const setProductAmount = (userListId, productId, amount) => ({
  type: ActionTypes.SET_PRODUCT_AMOUNT,
  userListId,
  productId,
  amount
})

export function fetchListProducts(listId) {
  return async (dispatch, getState) => {
    try {
      const { productsByList: { listProducts } } = getState()

      dispatch(setLoadingListProducts(true))

      const { results } = await ListProductsService.getListProducts(listId)

      const productsList = UtilsService.normalize(
        results,
        Object.keys(listProducts).length
      )

      dispatch(setListProducts(listId, productsList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}

export function addProductToMyList(listId, productId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingListProducts(true))

      const product = await ListProductsService.addListProduct(listId, productId)

      dispatch(addProductToList(listId, product))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}