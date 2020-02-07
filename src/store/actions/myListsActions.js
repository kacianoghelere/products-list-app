import swal from 'sweetalert'

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

const addToMyLists = (list) => ({
  type: ActionTypes.ADD_TO_MY_LISTS,
  list
})

const updateMyList = (list) => ({
  type: ActionTypes.UPDATE_MY_LIST,
  list
})

const setMyLists = (lists) => ({
  type: ActionTypes.SET_MY_LISTS,
  lists
})

export const resetMyLists = () => ({
  type: ActionTypes.RESET_MY_LISTS
})

export function createUserList() {
  return async (dispatch) => {
    try {
      const title = await swal({
        title: 'Informe um título para a sua lista',
        text: 'Vamos adicionar alguns produtos para você ;)',
        content: "input",
        buttons: ['Cancelar', 'Criar minha lista!']
      })

      if (! title) {
        return
      }

      dispatch(setLoadingMyLists(true))

      const newList = await UserListsService.createUserList({
        title
      })

      dispatch(addToMyLists(newList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingMyLists(false))
    }
  }
}

export function updateUserList(userListId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingMyLists(true))

      const title = await swal({
        title: 'Informe um novo título para a sua lista de produtos',
        content: "input",
        buttons: ['Cancelar', 'Atualizar lista']
      })

      if (! title) {
        return
      }

      const updatedList = await UserListsService.updateUserList(userListId, {
        title
      })

      dispatch(updateMyList(updatedList))
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingMyLists(false))
    }
  }
}

export function destroyUserList(userListId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingMyLists(true))

      const shouldDestroy = await swal({
        title: 'Deseja remover sua lista de produtos?',
        text: 'Você não será capaz de utilizá-la após a confirmação',
        dangerMode: true,
        buttons: ['Cancelar', 'Remover lista']
      })

      if (shouldDestroy) {
        await UserListsService.destroyUserList(userListId)

        dispatch(addToMyLists(userListId))
      }
    } catch (error) {
      UtilsService.handleError(error)
    } finally {
      dispatch(setLoadingMyLists(false))
    }
  }
}

export function fetchMyLists() {
  return async (dispatch, getState) => {
    try {
      const { myLists: { lists, pagination } } = getState()

      dispatch(setLoadingMyLists(true))

      const data = await UserListsService.getMyLists({
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
      UtilsService.handleError(error)
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