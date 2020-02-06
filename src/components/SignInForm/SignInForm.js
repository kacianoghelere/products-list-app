import React, { useState } from 'react'

import './SignInForm.scss'

export default function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({ email, password })
  }

  return (
    <form
      className="SignInForm"
      onSubmit={handleSubmit}
    >
      <label htmlFor="inputEmail" className="sr-only">E-mail</label>
      <input
        className="form-control"
        type="email"
        id="inputEmail"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="sr-only">Senha</label>
      <input
        className="form-control"
        type="password"
        id="inputPassword"
        name="password"
        placeholder="Senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}