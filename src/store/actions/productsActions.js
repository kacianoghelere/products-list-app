import * as ActionTypes from './types'

export const setProductsList = (productsList) => ({
  type: ActionTypes.SET_PRODUCTS_LIST,
  productsList
})

export const resetProductsList = () => ({
  type: ActionTypes.RESET_PRODUCTS_LIST
})