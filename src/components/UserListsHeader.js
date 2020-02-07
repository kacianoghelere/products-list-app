import React from 'react'

export default function UserListsHeader({ user = { name: ''} }) {
  return (
    <div className="jumbotron mx-3 mt-3 text-center p-3">
      <h1>Seja bem vindo(a), {user.name}!</h1>
      <p className="m-0">
        Aqui você pode encontrar o seu catálogo de listas de produtos.<br />
        Você pode adicionar novas lista sempre que quiser.<br />
        Nós selecionaremos alguns produtos para você automáticamente.
      </p>
    </div>
  )
}
