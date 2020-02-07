import * as UtilsService from '../../services/utils'
import * as ProductsService from '../../services/products'
import * as ActionTypes from './types'

export function addSelectedProductsToList(listId) {
  return async (dispatch) => {
    // BUSCA PRODUTOS POR NOME E PREÇO

    // ADICIONA OS SELECIONADOS NA LISTA
  }
}

export const setProductsSelectorPage = (page) => ({
  type: ActionTypes.SET_PRODUCTS_SELECTOR_PAGE,
  page
})

export const setProductsSelectorTotalPages = (totalPages) => ({
  type: ActionTypes.SET_PRODUCTS_SELECTOR_TOTAL_PAGES,
  totalPages
})

export const setSearchText = (searchText) => ({
  type: ActionTypes.SET_SEARCH_TEXT,
  searchText
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

export const setProductsForSelector = (listId, products) => ({
  type: ActionTypes.SET_PRODUCTS_FOR_SELECTOR,
  listId,
  products
})

export const toggleProductSelection = (productId, isSelected) => ({
  type: ActionTypes.TOGGLE_PRODUCT_SELECTION,
  productId,
  isSelected
})

export const setProductAmount = (productId, amount) => ({
  type: ActionTypes.SET_PRODUCT_AMOUNT,
  productId,
  amount
})

export function fetchSelectorProducts(listId) {
  return async (dispatch, getState) => {
    try {
      const {
        productsSelector: { filters, pagination, products }
      } = getState()

      dispatch(setLoadingProductsForSelector(true))

      const { data } = await ProductsService.getProducts({
        ...filters,
        page: pagination.page,
      })

      const { currentPage, results, total_pages } = data;

      dispatch(setProductsSelectorPage(currentPage))

      dispatch(setProductsSelectorTotalPages(total_pages))

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

export function fetchSelectorProductsNextPage(listId) {
  return (dispatch, getState) => {
    const { productsSelector: { pagination } } = getState()

    const { page, totalPages } = pagination

    if ((page + 1) >= totalPages) {
      return
    }

    const nextPage = (page + 1)

    dispatch(setProductsSelectorPage(nextPage))

    dispatch(fetchSelectorProducts(listId))
  }
}