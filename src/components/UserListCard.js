import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { pluralizedLabel } from '../services/utils'

function UserListCard({ list, productsCount }) {
  const renderProductsCount = () => {
    const count = productsCount || list.productsCount

    if (!count) {
      return <span>Não contém nenhum produto</span>
    }

    return (
      <span>
        Contém {pluralizedLabel('produto', count)}
      </span>
    )
  }

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
          {renderProductsCount()}
        </small>
      </div>
    </Link>
  )
}

const mapStateToProps = ({ productsByList: { listProducts } }, { list }) => ({
  productsCount: Object.keys(listProducts[list.id] || {}).length
})

export default connect(mapStateToProps, null)(UserListCard)