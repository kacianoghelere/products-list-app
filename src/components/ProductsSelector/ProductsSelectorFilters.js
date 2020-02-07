import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'

export default function ProductsSelectorFilters({ onSubmit }) {
  const [name, setName] = useState('')

  const [minPrice, setMinPrice] = useState(0)

  const [maxPrice, setMaxPrice] = useState(0)

  const handleSubmit = (event) => {
    onSubmit({ name, minPrice, maxPrice })

    event.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="formProductName">
          <Form.Label>
            <strong>Nome</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do produto"
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setMinPrice(event.target.value)}
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
            onChange={(event) => setMaxPrice(event.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}
