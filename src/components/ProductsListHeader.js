import React from 'react'

import ProductsListControls from './ProductsListControls'

export default function ProductsListHeader({ list = {}, products = {} }) {
  return (
    <div className="jumbotron mx-3 mt-3 p-3 text-center">
      <h1>{list.title}</h1>
      <p>
        Os itens abaixo fazem parte desta lista selecionada.<br />
        Você pode adicionar ou remover itens de acordo com a sua necessidade.
      </p>
      <hr className="my-4" />
      <ProductsListControls
        list={list}
        products={products}
      />
    </div>
  )
}
