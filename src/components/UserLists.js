import React from 'react'
import PropTypes from 'prop-types'

import UserListCard from './UserListCard'

function UserLists({ lists }) {
  return (
    <div className="UserLists mx-3">
      <h1 className="my-3">Minhas listas de produtos</h1>
      <div className="row">
        {Object.values(lists).map((list) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mb-3"
            key={list.id}
          >
            <UserListCard list={list} />
          </div>
        ))}
      </div>
    </div>
  )
}

UserLists.propTypes = {
  lists: PropTypes.object.isRequired
}

export default UserLists