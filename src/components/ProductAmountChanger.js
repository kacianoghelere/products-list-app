import React from 'react'
import { connect } from 'react-redux'

import { setProductAmount } from '../store/actions/productsByListActions'

function ProductAmountChanger({ list, product, setProductAmount }) {
  const handleChange = ({ target: { value } }) => {
    setProductAmount(list.id, product.id, parseInt(value))
  }

  return (
    <input
      className="form-control form-control-sm"
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