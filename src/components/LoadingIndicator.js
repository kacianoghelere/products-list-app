import React from 'react'

export default function LoadingIndicator() {
  return (
    <div className="w-100 d-flex justify-content-center text-muted">
      <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
