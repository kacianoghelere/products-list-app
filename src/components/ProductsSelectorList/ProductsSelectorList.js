import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

import {
  fetchSelectorInitialProducts,
  fetchSelectorProductsNextPage,
  toggleProductsSelection
} from '../../store/actions/productsSelectorActions'
import {
  getVisibleProducts
} from '../../store/selectors/productsByListSelectors'
import Icon from '../Icon'
import ProductSelectionToggler from '../ProductSelectionToggler'
import './ProductsSelectorList.scss'

class ProductsSelectorList extends Component {

  componentDidMount() {
    this.props.fetchSelectorInitialProducts()
  }

  render() {
    return (
      <div className="ProductsSelectorList">
        <div className="d-flex mb-2">
          <Button
            variant="outline-primary mr-1"
            size="sm"
            onClick={() => this.props.toggleProductsSelection(true)}
          >
            <Icon name="check-square-o" /> <strong>Marcar todos</strong>
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => this.props.toggleProductsSelection(false)}
          >
            <Icon name="square-o" /> <strong>Desmarcar todos</strong>
          </Button>
        </div>
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
  fetchSelectorProductsNextPage,
  toggleProductsSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelectorList)