import * as ProductsService from '../../services/products'
import * as UtilsService from '../../services/utils'
import { setLoadingProductsList } from './loadingActions'
import { setPage, setSearchText, setTotalPages } from './paginationActions'
import { resetListProducts, setProductsList } from './productsActions'

export function fetchListProducts(searchText = '') {
  return async (dispatch, getState) => {
    try {
      const { pagination, products } = getState()

      dispatch(setLoadingProductsList(true))

      const { data } = await ProductsService.getProducts({
        page: pagination.page,
        searchText
      })

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

export function fetchListProductsNextPage() {
  return (dispatch, getState) => {
    const { pagination: { page, searchText, totalPages } } = getState()

    if ((page + 1) >= totalPages) {
      return
    }

    const nextPage = (page + 1)

    dispatch(setPage(nextPage))

    dispatch(fetchListProducts(searchText))
  }
}