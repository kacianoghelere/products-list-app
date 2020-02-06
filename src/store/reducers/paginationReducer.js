import * as ActionTypes from '../actions/types'

const initialState = {
  page: 1,
  searchText: '',
  totalPages: 1
}

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    case ActionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      }
    case ActionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages
      }
    default:
      return state
  }
}