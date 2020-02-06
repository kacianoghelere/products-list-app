import React from 'react'
import PropTypes from 'prop-types'

import ProductCardFooter from '../ProductCardFooter'
import './ProductCard.scss'

function ProductCard({ product, removable = false }) {
  return (
    <div className="ProductCard card h-100 border-0 shadow-sm">
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
      />
      <div className="card-body">
        <p className="card-title">{product.name}</p>
        <p className="card-text text-muted"><b>R$:</b> {product.price}</p>
      </div>
      {removable ? <ProductCardFooter product={product} /> : null}
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  removable: PropTypes.bool
}

export default ProductCard