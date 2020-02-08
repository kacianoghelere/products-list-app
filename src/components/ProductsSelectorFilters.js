import React from 'react'
import { connect } from 'react-redux'
import { Col, Form } from 'react-bootstrap'

import {
  setProductsSelectorFilter
} from '../store/actions/productsSelectorActions'

function ProductsSelectorFilters({
  filters,
  setProductsSelectorFilter
}) {
  const handleChange = ({ target: { name, value }}) => {
    setProductsSelectorFilter(name, value)
  }

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="formProductName">
          <Form.Label>
            <strong>Nome</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do produto"
            name="name"
            value={filters.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="formProductMinPrice">
          <Form.Label>
            <strong>Preço mínimo</strong>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Preço mínimo"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="formProductMaxPrice">
          <Form.Label>
            <strong>Preço máximo</strong>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Preço máximo"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

const mapStateToProps = ({ productsSelector: { filters } }) => ({
  filters
})

const mapDispatchToProps = {
  setProductsSelectorFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelectorFilters)