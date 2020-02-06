import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.png'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className="Navbar navbar navbar-light bg-white justify-content-center mx-md-n3">
      <Link className="navbar-brand w-100" to="/">
        <img
          src={logo}
          alt="Mercado Fácil"
        />
      </Link>
    </nav>
  )
}
