import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

import { pluralizer } from '../../services/utils'
import {
  addSelectedProductsToList,
  fetchSelectorInitialProducts,
  hideProductsSelector
} from '../../store/actions/productsSelectorActions'
import {
  getSelectedProductsCount
} from '../../store/selectors/productsByListSelectors'
import ProductsSelectorFilters from '../ProductsSelectorFilters'
import ProductsSelectorList from '../ProductsSelectorList/ProductsSelectorList'
import './ProductsSelector.scss'

class ProductsSelector extends Component {

  constructor(props) {
    super(props)

    this.addProducts = this.addProducts.bind(this)
  }

  addProducts(event) {
    this.props.addSelectedProductsToList(this.props.list.id)

    this.props.hideProductsSelector()

    event.preventDefault()
  }

  componentDidMount() {
    this.props.fetchSelectorInitialProducts()
  }

  renderSelectedLabel() {
    const { selectedProductsCount } = this.props

    if (!selectedProductsCount) {
      return <p className="m-0"></p>
    }

    const selectedLabel = pluralizer('selecionado', selectedProductsCount)

    return <p className="m-0">{selectedProductsCount} {selectedLabel}</p>
  }

  render() {
    return (
      <Modal
        size="lg"
        show={this.props.showSelector}
        onHide={() => this.props.hideProductsSelector()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Encontrar produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductsSelectorFilters onSubmit={this.handleSubmit} />
          <ProductsSelectorList />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          {this.renderSelectedLabel()}
          <div>
            <Button
              className="mr-1"
              variant="outline-primary"
              onClick={() => this.props.hideProductsSelector()}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={this.addProducts}
            >
              <strong>Adicionar Produtos</strong>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = ({ productsSelector }) => ({
  showSelector: productsSelector.showSelector,
  selectedProductsCount: getSelectedProductsCount(productsSelector)
})

const mapDispatchToProps = {
  addSelectedProductsToList,
  fetchSelectorInitialProducts,
  hideProductsSelector
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelector)