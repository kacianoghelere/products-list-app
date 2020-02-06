import * as ActionTypes from './types';

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