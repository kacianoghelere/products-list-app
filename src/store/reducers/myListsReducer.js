import { combineReducers } from 'redux'

import * as ActionTypes from '../actions/types'

const paginationInitialState = {
  loading: false,
  currentPage: 0,
  totalPages: 1
}

function pagination(state = paginationInitialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOADING_MY_LISTS:
      return {
        ...state,
        loading: action.value
      }
    case ActionTypes.SET_MY_LISTS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case ActionTypes.SET_MY_LISTS_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages
      }
    case ActionTypes.RESET_MY_LISTS:
      return paginationInitialState
    default:
      return state
  }
}

const listsInitialState = {}

function lists(state = listsInitialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_MY_LISTS:
      return {
        ...state,
        [action.list.id]: action.list
      }
    case ActionTypes.UPDATE_MY_LIST:
      return {
        ...state,
        [action.list.id]: {
          ...state[action.list.id],
          ...action.list
        }
      }
    case ActionTypes.REMOVE_FROM_MY_LISTS:
      let lists = { ...state }

      delete lists[action.listId]

      return lists
    case ActionTypes.SET_MY_LISTS:
      return {
        ...state,
        ...action.lists
      }
    case ActionTypes.RESET_MY_LISTS:
      return listsInitialState
    default:
      return state
  }
}

export default combineReducers({
  pagination,
  lists
})