import * as ProductsService from '../../services/products'
import * as UtilsService from '../../services/utils'
import { setLoadingProductsList } from './loadingActions'
import { setPage, setSearchText, setTotalPages } from './paginationActions'
import { resetProductsList, setProductsList } from './productsActions'

export function fetchProductsList(searchText = '') {
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

        dispatch(resetProductsList())
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
      console.error('fetchProductsList', error)
    } finally {
      dispatch(setLoadingProductsList(false))
    }
  }
}

export function fetchProductsListNextPage() {
  return (dispatch, getState) => {
    const { pagination: { page, searchText, totalPages } } = getState()

    if ((page + 1) >= totalPages) {
      return
    }

    const nextPage = (page + 1)

    dispatch(setPage(nextPage))

    dispatch(fetchProductsList(searchText))
  }
}