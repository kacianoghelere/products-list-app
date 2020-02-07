import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

import ProductSelectionToggler from './ProductSelectionToggler'
import ProductAmountChanger from './ProductAmountChanger'

function ProductsSelectorList({ products }) {
  return (
    <ListGroup>
      {Object.values(products || {}).map((product) => (
        <div
          className="list-group d-flex justify-content-between"
          key={product.id}
        >
          <ProductSelectionToggler product={product} />
          <ProductAmountChanger product={product} />
        </div>
      ))}
    </ListGroup>
  )
}

const mapStateToProps = ({ productsSelector }) => ({
  products: productsSelector.productsFound
})

export default connect(mapStateToProps, null)(ProductsSelectorList)