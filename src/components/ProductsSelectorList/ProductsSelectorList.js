import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import {
  fetchSelectorInitialProducts,
  fetchSelectorProductsNextPage
} from '../../store/actions/productsSelectorActions'
import {
  getVisibleProducts
} from '../../store/selectors/productsByListSelectors'
import ProductSelectionToggler from '../ProductSelectionToggler'
import './ProductsSelectorList.scss'

class ProductsSelectorList extends Component {

  componentDidMount() {
    this.props.fetchSelectorInitialProducts()
  }

  render() {
    return (
      <div className="ProductsSelectorList">
        <ListGroup>
          {Object.values(this.props.visibleProducts || {}).map((product) => (
            <div
              className="list-group-item"
              key={product.id}
            >
              <ProductSelectionToggler product={product} />
            </div>
          ))}
          <ListGroupItem
            className="text-center"
            action
            onClick={() => this.props.fetchSelectorProductsNextPage()}
          >
            Carregar mais produtos...
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = ({ productsSelector }) => ({
  visibleProducts: getVisibleProducts(productsSelector),
  loadingProcucts: productsSelector.loadingProcucts
})

const mapDispatchToProps = {
  fetchSelectorInitialProducts,
  fetchSelectorProductsNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelectorList)