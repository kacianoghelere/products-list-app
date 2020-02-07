import * as UserListsService from '../../services/user-lists'
import * as UtilsService from '../../services/utils'
import * as ActionTypes from './types'

const setLoadingMyLists = (value) => ({
  type: ActionTypes.SET_MY_LISTS_LOADING,
  value
})

const setPage = (page) => ({
  type: ActionTypes.SET_MY_LISTS_CURRENT_PAGE,
  page
})

const setTotalPages = (totalPages) => ({
  type: ActionTypes.SET_MY_LISTS_TOTAL_PAGES,
  totalPages
})

const setMyLists = (lists) => ({
  type: ActionTypes.SET_MY_LISTS,
  lists
})

export const resetMyLists = () => ({
  type: ActionTypes.RESET_MY_LISTS
})

export function fetchMyLists() {
  return async (dispatch, getState) => {
    try {
      const { myLists: { lists, pagination } } = getState()

      dispatch(setLoadingMyLists(true))

      const { data } = await UserListsService.getMyLists({
        page: pagination.currentPage
      })

      const { currentPage, results, total_pages } = data;

      dispatch(setPage(currentPage))

      dispatch(setTotalPages(total_pages))

      const userLists = UtilsService.normalize(
        results,
        Object.keys(lists).length
      )

      dispatch(setMyLists(userLists))
    } catch (error) {
      console.error('fetchMyLists', error)
    } finally {
      dispatch(setLoadingMyLists(false))
    }
  }
}

export function fetchMyListsNextPage() {
  return (dispatch, getState) => {
    const { myLists: { pagination: { currentPage, totalPages } } } = getState()

    if ((currentPage + 1) >= totalPages) {
      return
    }

    const nextPage = (currentPage + 1)

    dispatch(setPage(nextPage))

    dispatch(fetchMyLists())
  }
}