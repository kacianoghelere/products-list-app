import React from 'react'

import { pluralizer } from '../services/utils'

export default function ProductsSelectedLabel({ products }) {
  const productsSelected = Object.keys(products || {}).length

  const productsLabel = pluralizer('produto', productsSelected)

  const selectedLabel = pluralizer('selecionado', productsSelected)

  const productsSelectedLabel = (
    <p className="m-0 text-primary">
      <strong>{productsSelected} {productsLabel} {selectedLabel}</strong>
    </p>
  )

  const noProductsSelectedLabel = (
    <p className="m-0 text-danger">
      <strong>Nenhum produto selecionado</strong>
    </p>
  )

  return productsSelected ? productsSelectedLabel : noProductsSelectedLabel
}
