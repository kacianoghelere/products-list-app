import React from 'react'
import { connect } from 'react-redux'

import {
  toggleProductSelection
} from '../store/actions/productsSelectorActions'

function ProductSelectionToggler({ product, toggleProductSelection }) {
  return (
    <div className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        id={`product-${product.id}`}
        checked={product.selected}
        onClick={() => toggleProductSelection(product.id, !product.selected)}
      />
      <label
        className="custom-control-label"
        htmlFor={`product-${product.id}`}
      >
        {product.name} - R$ {product.price}
      </label>
    </div>
  )
}

const mapDispatchToProps = {
  toggleProductSelection
}

export default connect(null, mapDispatchToProps)(ProductSelectionToggler)