import React from 'react'
import { connect } from 'react-redux'

import {
  setProductAmount
} from '../store/actions/productsSelectorActions'

function ProductAmountChanger({ product, setProductAmount }) {
  const handleChange = ({ target: { value } }) => {
    setProductAmount(product.id, parseInt(value))
  }

  return (
    <input
      className="form-control"
      type="number"
      value={product.amount}
      onChange={handleChange}
    />
  )
}

const mapDispatchToProps = {
  setProductAmount
}

export default connect(null, mapDispatchToProps)(ProductAmountChanger)