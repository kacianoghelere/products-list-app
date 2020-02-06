import React from 'react'

export default function ProductImage({ image, name }) {
  return (
    <img
      className="card-img-top"
      src={image}
      alt={name}
    />
  )
}