import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from './ProductCard/ProductCard'

function ProductsList({ products, removable = false }) {
  if (! products) {
    return null
  }

  return (
    <div className="ProductsList row mx-0">
      {Object.values(products).map((product) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3" key={product.id}>
          <ProductCard
            product={product}
            removable={removable}
          />
        </div>
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.object,
  removable: PropTypes.bool
}

export default ProductsList