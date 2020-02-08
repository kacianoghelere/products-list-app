import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'

import { removeProductFromMyList } from '../store/actions/productsByListActions'
import Icon from './Icon'
import ProductAmountChanger from './ProductAmountChanger'

function ProductCardOptions({
  editable,
  list,
  product,
  removeProductFromMyList
}) {
  if (!editable) return null

  return (
    <>
      <hr/>
      <Row className="align-items-end">
        <Col md="6">
          <ProductAmountChanger
            list={list}
            product={product}
          />
        </Col>
        <Col md="6">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => removeProductFromMyList(list.id, product.id)}
            disabled={!!product.processing}
          >
            <Icon name="trash" /> Remover
          </Button>
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
  removeProductFromMyList
}

export default connect(null, mapDispatchToProps)(ProductCardOptions)