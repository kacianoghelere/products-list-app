import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

import { addProductsToList } from '../../store/actions/listProductsActions'
import {
  fetchProducts,
  hideProductsSelector
} from '../../store/actions/productsSelectorActions'
import ProductsSelectorFilters from './ProductsSelectorFilters'
import ProductsSelectorList from './ProductsSelectorList'
import './ProductsSelector.scss'

function ProductsSelector({
  addProductsToList,
  list,
  hideProductsSelector,
  productsSelector
}) {
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleSubmit = (event) => {


    event.preventDefault()
  }

  const handleSelectionChange = (collection) => {
    setSelectedProducts(collection)
  }

  const addProducts = (event) => {
    addProductsToList(list.id, selectedProducts)

    hideProductsSelector()

    event.preventDefault()
  }

  return (
    <Modal.Dialog show={productsSelector.show}>
      <Modal.Header closeButton>
        <Modal.Title>Encontrar produtos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductsSelectorFilters onSubmit={handleSubmit} />
        <ProductsSelectorList
          products={productsSelector.products}
          onChange={handleSelectionChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={() => hideProductsSelector()}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => addProducts()}
        >
          <strong>Adicionar Produtos</strong>
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

const mapStateToProps = ({ productsSelector }) => ({
  productsSelector
})

const mapDispatchToProps = {
  addProductsToList,
  fetchProducts,
  hideProductsSelector
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelector)