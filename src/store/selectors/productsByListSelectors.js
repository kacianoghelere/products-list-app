import { createSelector } from 'reselect'

import { normalize } from '../../services/utils'

const getFilters = ({ filters }) => filters

const getProducts = ({ products }) => products

export const getVisibleProducts = createSelector(
  [getFilters, getProducts],
  (filters, products) => {
    const productsCollection = Object.values(products || {})

    if (!productsCollection.length) {
      return products
    }

    let visibleProducts = productsCollection

    if (filters.name) {
      visibleProducts = visibleProducts.filter((product) => {
        return product.name.includes(filters.name)
      })
    }

    if (filters.minPrice) {
      visibleProducts = visibleProducts.filter((product) => {
        return product.price >= filters.minPrice
      })
    }

    if (filters.maxPrice) {
      visibleProducts = visibleProducts.filter((product) => {
        return product.price <= filters.maxPrice
      })
    }

    return normalize(visibleProducts)
  }
)

export const getSelectedProducts = createSelector(
  [getProducts],
  (products) => {
    return Object.values(products || {}).filter(({ selected }) => !!selected)
  }
)

export const getSelectedProductsCount = createSelector(
  [getProducts],
  (products) => {
    return Object.values(products || {})
      .filter(({ selected }) => !!selected)
      .length
  }
)