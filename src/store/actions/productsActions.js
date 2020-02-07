import * as ActionTypes from './types'

export const setProductsList = (productsList) => ({
  type: ActionTypes.SET_PRODUCTS_LIST,
  productsList
})

export const setPage = (page) => ({
  type: ActionTypes.SET_PAGE,
  page
})

export const setTotalPages = (totalPages) => ({
  type: ActionTypes.SET_TOTAL_PAGES,
  totalPages
})

export const setSearchText = (searchText) => ({
  type: ActionTypes.SET_SEARCH_TEXT,
  searchText
})

export function fetchProducts(searchText = '') {
  return async (dispatch, getState) => {
    try {
      const { pagination, products } = getState()

      dispatch(setLoadingProductsList(true))

      const { data } = await ProductsService.getProducts({
        page: pagination.page,
        searchText
      })

      if (searchText !== pagination.searchText) {
        dispatch(setSearchText(searchText))

        dispatch(resetListProducts())
      }

      const { currentPage, results, total_pages } = data;

      dispatch(setPage(currentPage))

      dispatch(setTotalPages(total_pages))

      const productsList = UtilsService.normalize(
        results,
        Object.keys(products).length
      )

      dispatch(setProductsList(productsList))
    } catch (error) {
      console.error('fetchListProducts', error)
    } finally {
      dispatch(setLoadingProductsList(false))
    }
  }
}