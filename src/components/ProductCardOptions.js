import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import { removeProductFromList } from '../store/actions/productsByListActions'
import Icon from './Icon'
import ProductAmountChanger from './ProductAmountChanger'

function ProductCardOptions({ list, product }) {
  return (
    <>
      <hr/>
      <Row>
        <Col md="4">
          <ProductAmountChanger
            list={list}
            product={product}
          />
        </Col>
        <Col md="6">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={removeProductFromList}
          >
            <Icon name="trash" /> Remover
          </button>
        </Col>
      </Row>
    </>
  )
}

ProductCardOptions.propTypes = {
  list: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  removeProductFromList
}

export default connect(null, mapDispatchToProps)(ProductCardOptions)