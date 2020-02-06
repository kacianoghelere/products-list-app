import React from 'react'

export default function ProductsListHeader({ user = { name: 'visitante'} }) {
  return (
    <div className="jumbotron mx-3 text-center">
      <h1>Seja bem vindo(a), {user.name}!</h1>
      <p>
        Os itens abaixo fazem parte de uma lista pré-selecionada.<br />
        Você pode adicionar ou remover itens de acordo com a sua necessidade.
      </p>
      <hr className="my-4" />
      <p>Você possui <b>{'x'}</b> produtos selecionados</p>
    </div>
  )
}
