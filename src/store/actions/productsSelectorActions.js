import * as UtilsService from '../../services/utils'
import * as ProductsService from '../../services/products'
import * as ActionTypes from './types'


export const setProductsSelectorPage = (page) => ({
  type: ActionTypes.SET_PRODUCTS_SELECTOR_PAGE,
  page: parseInt(page)
})

export const setProductsSelectorTotalPages = (totalPages) => ({
  type: ActionTypes.SET_PRODUCTS_SELECTOR_TOTAL_PAGES,
  totalPages: parseInt(totalPages)
})

export const setProductsSelectorFilter = (name, value) => ({
  type: ActionTypes.SET_PRODUCTS_SELECTOR_FILTER,
  name,
  value
})

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

export const toggleProductSelection = (productId, isSelected) => ({
  type: ActionTypes.TOGGLE_PRODUCT_SELECTION,
  productId,
  isSelected
})

export const toggleProductsSelection = (isSelected) => ({
  type: ActionTypes.TOGGLE_PRODUCTS_SELECTION,
  isSelected
})

export function fetchSelectorProducts() {
  return async (dispatch, getState) => {
    try {
      const { productsSelector: { pagination, products } } = getState()

      dispatch(setLoadingProductsForSelector(true))

      const response = await ProductsService.getProducts({
        page: pagination.page
      })

      const { results, total_pages } = response;

      dispatch(setProductsSelectorTotalPages(total_pages))

      const productsList = UtilsService.normalize(
        results,
        Object.keys(products).length
      )

      dispatch(setProductsForSelector(productsList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingProductsForSelector(false))
    }
  }
}

export function fetchSelectorProductsNextPage() {
  return (dispatch, getState) => {
    const { productsSelector: { pagination } } = getState()

    const { page, totalPages } = pagination

    const nextPage = parseInt(page) + 1

    if (nextPage >= totalPages) {
      return
    }

    dispatch(setProductsSelectorPage(nextPage))

    dispatch(fetchSelectorProducts())
  }
}

export function fetchSelectorInitialProducts() {
  return (dispatch, getState) => {
    const { productsSelector: { products } } = getState()

    dispatch(setProductsSelectorPage(1))

    if (!Object.keys(products || {}).length) {
      dispatch(fetchSelectorProducts())
    }
  }
}