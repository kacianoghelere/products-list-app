import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap'

import ProductCardOptions from '../ProductCardOptions'
import './ProductCard.scss'

function ProductCard({ list, product, editable = false }) {
  const renderOptions = () => {
    if (!editable) return null

    return (
      <ProductCardOptions
        list={list}
        product={product}
      />
    )
  }

  return (
    <Card className="ProductCard h-100 border-0 shadow">
      <Row className="h-100" noGutters>
        <Col md="4">
          <img
            className="card-img"
            src={product.image}
            alt={product.name}
          />
        </Col>
        <Col md="8">
          <Card.Body className="w-100">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text text-muted"><b>R$:</b> {product.price}</p>
            {renderOptions()}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  editable: PropTypes.bool
}

export default ProductCard