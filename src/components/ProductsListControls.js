import React from 'react'
import { connect } from 'react-redux'

import { showProductsSelector } from '../store/actions/productsSelectorActions'
import Icon from './Icon'
import ProductsSelectedLabel from './ProductsSelectedLabel'
import ProductsSelector from './ProductsSelector/ProductsSelector'

function ProductsListControls({ list, products, showProductsSelector }) {
  return (
    <>
      <div className="d-md-flex justify-content-md-between align-items-md-center">
        <ProductsSelectedLabel products={products} />
        <button
          className="btn btn-primary mt-sm-2 mt-md-0"
          onClick={() => showProductsSelector()}
        >
          <Icon name="plus" /> <b>Adicionar produtos</b>
        </button>
      </div>
      <ProductsSelector list={list} />
    </>
  )
}

const mapDispatchToProps = {
  showProductsSelector
}

export default connect(null, mapDispatchToProps)(ProductsListControls)