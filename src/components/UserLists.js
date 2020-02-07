import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createUserList } from '../store/actions/myListsActions'
import Icon from './Icon'
import UserListCard from './UserListCard'

function UserLists({ lists, createUserList }) {
  return (
    <div className="UserLists mx-3">
      <div className="d-flex justify-content-between my-3">
        <h1 className="m-0">Minhas listas de produtos</h1>
        <button
          className="btn btn-primary"
          onClick={() => createUserList()}
        >
          <Icon name="plus" /> <strong>Criar lista de produtos</strong>
        </button>
      </div>
      <div className="row">
        {Object.values(lists).map((list) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3"
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

const mapDispatchToProps = {
  createUserList
}

export default connect(null, mapDispatchToProps)(UserLists)