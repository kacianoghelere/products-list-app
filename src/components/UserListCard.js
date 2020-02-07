import React from 'react'
import { Link } from 'react-router-dom'

export default function UserListCard({ list }) {
  return (
    <Link
      className="card border-primary shadow h-100"
      key={list.id}
      to={`/minhas-listas/${list.id}`}
    >
      <div className="card-body text-center">
        <p className="card-title m-0">
          <strong>{list.title}</strong>
        </p>
        <small className="card-text text-muted">
          Contém {50} produtos
        </small>
      </div>
    </Link>
  )
}
