import React from 'react'

import Icon from './Icon'

export default function ControlBar() {
  return (
    <div className="navbar navbar-light bg-light d-flex justify-content-center mb-3">
      <button className="btn btn-primary btn-lg">
        <Icon name="plus" /> Adicionar produtos
      </button>
    </div>
  )
}
