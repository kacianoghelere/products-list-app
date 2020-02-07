import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import debounce from 'lodash.debounce'

import {
  addSelectedProductsToList
} from '../../store/actions/productsSelectorActions'
import {
  fetchSelectorProducts,
  fetchSelectorProductsNextPage,
  hideProductsSelector
} from '../../store/actions/productsSelectorActions'
import ProductsSelectorFilters from '../ProductsSelectorFilters'
import ProductsSelectorList from '../ProductsSelectorList'
import './ProductsSelector.scss'

class ProductsSelector extends Component {

  constructor(props) {
    super(props)

    this.addProducts = this.addProducts.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    window.onscroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight) {
        this.props.fetchSelectorProductsNextPage()
      }
    }, 300)
  }

  addProducts(event) {
    this.props.addSelectedProductsToList(this.props.list.id)

    this.props.hideProductsSelector()

    event.preventDefault()
  }

  handleSubmit(event) {
    this.props.fetchSelectorProducts()

    event.preventDefault()
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
        <Modal.Footer>
          <Button
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
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = ({ productsSelector: { showSelector } }) => ({
  showSelector
})

const mapDispatchToProps = {
  addSelectedProductsToList,
  fetchSelectorProducts,
  fetchSelectorProductsNextPage,
  hideProductsSelector
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelector)