import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from './ProductCard/ProductCard'

function ProductsList({ list, products, editable = false }) {
  if (!products) {
    return null
  }

  return (
    <div className="ProductsList row mx-0">
      {Object.values(products).map((product) => (
        <div className="col-12 col-sm-6 p-3" key={product.id}>
          <ProductCard
            list={list}
            product={product}
            editable={editable}
          />
        </div>
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.object,
  editable: PropTypes.bool
}

export default ProductsList