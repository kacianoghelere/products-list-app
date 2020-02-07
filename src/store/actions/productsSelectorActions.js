import * as UtilsService from '../../services/utils'
import * as ProductsService from '../../services/products'
import * as ActionTypes from './types'

export const showProductsSelector = () => ({
  type: ActionTypes.SHOW_PRODUCTS_SELECTOR
})

export const hideProductsSelector = () => ({
  type: ActionTypes.HIDE_PRODUCTS_SELECTOR
})

export const setLoadingProductsForSelector = (value) => ({
  type: ActionTypes.SET_LOADING_PRODUCTS_FOR_SELECTOR,
  value
})

export const setProductsForSelector = (products) => ({
  type: ActionTypes.SET_PRODUCTS_FOR_SELECTOR,
  products
})

export const setProductAsSelected = (product) => ({
  type: ActionTypes.SET_PRODUCT_AS_SELECTED,
  product
})

export function fetchProducts(listId) {
  return async (dispatch, getState) => {
    try {
      const { pagination, products } = getState()

      dispatch(setLoadingProductsForSelector(true))

      const response = await ProductsService.getProducts({
        page: pagination.page
      })

      const { currentPage, results, totalPages } = response

      const productsList = UtilsService.normalize(
        results,
        Object.keys(products).length
      )

      dispatch(setProductsForSelector(listId, productsList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingProductsForSelector(false))
    }
  }
}