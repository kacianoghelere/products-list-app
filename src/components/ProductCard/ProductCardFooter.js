import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Icon from '../Icon'
import './ProductCard.scss'

function ProductCardFooter({ product }) {
  return (
    <div className="card-footer border-0 bg-white d-flex justify-content-end">
      <button className="btn btn-secondary">
        <Icon name="trash" /> Remover
      </button>
    </div>
  )
}

ProductCardFooter.propTypes = {
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardFooter)