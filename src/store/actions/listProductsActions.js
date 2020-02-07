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

export function fetchListProducts(listId) {
  return async (dispatch, getState) => {
    try {
      const { pagination, products } = getState()

      dispatch(setLoadingListProducts(true))

      const { results } = await ListProductsService.getListProducts(listId, {
        page: pagination.page
      })

      const productsList = UtilsService.normalize(
        results,
        Object.keys(products).length
      )

      dispatch(setListProducts(listId, productsList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}

export function addProductsToList(listId) {
  return async (dispatch) => {
    // BUSCA PRODUTOS POR NOME E PREÇO

    // ADICIONA OS SELECIONADOS NA LISTA
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