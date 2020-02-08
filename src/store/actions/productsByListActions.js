import * as ActionTypes from './types'
import * as ListProductsService from '../../services/user-list-products'
import * as UtilsService from '../../services/utils'

const setLoadingListProducts = (value) => ({
  type: ActionTypes.SET_LOADING_LIST_PRODUCTS,
  value
})

const addProductToList = (userListId, product) => ({
  type: ActionTypes.ADD_PRODUCT_TO_LIST,
  userListId,
  product
})

const updateProductFromList = (userListId, product) => ({
  type: ActionTypes.UPDATE_PRODUCT_FROM_LIST,
  userListId,
  product
})

const removeProductFromList = (userListId, productId) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_LIST,
  userListId,
  productId
})

const setListProducts = (userListId, products) => ({
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

export function addProductsToMyList(listId) {
  return async (dispatch, getState) => {
    try {
      const {
        productsByList: { listProducts },
        productsSelector: { products }
      } = getState()

      dispatch(setLoadingListProducts(true))

      const selectedProducts = Object.values(products || {})
        .filter(({ selected }) => !!selected)

      for (const product of selectedProducts) {
        await ListProductsService.addListProduct(
          listId,
          product.id
        )

        if (listProducts.hasOwnProperty(product.id)) {
          dispatch(updateProductFromList(listId, {
            ...product,
            amount: product.amount + 1
          }))
        } else {
          dispatch(addProductToList(listId, product))
        }
      }
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}

export function updateProductFromMyList(listId, product) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingListProducts(true))

      await ListProductsService.updateListProduct(listId, product.id, product)

      dispatch(updateProductFromList(listId, product))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}

export function removeProductFromMyList(listId, productId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingListProducts(true))

      await ListProductsService.removeListProduct(listId, productId)

      dispatch(removeProductFromList(listId, productId))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingListProducts(false))
    }
  }
}