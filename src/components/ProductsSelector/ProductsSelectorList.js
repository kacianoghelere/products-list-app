import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function ProductsSelectorList({ onChange }) {
  const [products, setProducts] = useState([])


  const handleChange = () => {
    onChange()
  }

  return (
    <ListGroup>
      <ListGroupItem></ListGroupItem>
    </ListGroup>
  )
}
