import React from 'react'
import { connect } from 'react-redux'

import { addProductsToList } from '../store/actions/listProductsActions'
import Icon from './Icon'
import ProductsSelectedLabel from './ProductsSelectedLabel'

function ProductsListControls({ list, products }) {
  return (
    <div className="d-md-flex justify-content-md-between align-items-md-center">
      <ProductsSelectedLabel products={products} />
      <button
        className="btn btn-primary btn-lg mt-sm-2 mt-md-0"
        onClick={() => addProductsToList(list.id)}
      >
        <Icon name="plus" /> <b>Adicionar produtos</b>
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  addProductsToList
}

export default connect(null, mapDispatchToProps)(ProductsListControls)