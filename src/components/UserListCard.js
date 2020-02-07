import React from 'react'
import { Link } from 'react-router-dom'

export default function UserListCard({ list }) {
  return (
    <Link
      className="card border-0 shadow-sm bg-primary text-white"
      key={list.id}
      to={`/minhas-listas/${list.id}`}
    >
      <div className="card-body">
        <p className="card-title text-center m-0">
          <strong>{list.title}</strong>
        </p>
      </div>
    </Link>
  )
}
