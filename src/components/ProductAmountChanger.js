import React from 'react'
import { connect } from 'react-redux'
import { FormControl, InputGroup } from 'react-bootstrap'

import { updateProductFromMyList } from '../store/actions/productsByListActions'

function ProductAmountChanger({ list, product, updateProductFromMyList }) {
  const handleChange = ({ target: { value } }) => {
    updateProductFromMyList(list.id, {
      ...product,
      amount: value
    })
  }

  return (
    <InputGroup size="sm" title="Quantidade do produto">
      <InputGroup.Prepend>
        <InputGroup.Text id={`product-${product.id}-amout`}>
          Qtde.
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="number"
        aria-label="productAmount"
        id={`product-${product.id}-amout`}
        value={product.amount}
        onChange={handleChange}
        aria-describedby={`product-${product.id}-amout`}
        disabled={!!product.processing}
      />
    </InputGroup>
  )
}

const mapDispatchToProps = {
  updateProductFromMyList
}

export default connect(null, mapDispatchToProps)(ProductAmountChanger)