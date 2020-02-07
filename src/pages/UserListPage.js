import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getUserList } from '../store/actions/myListsActions'
import { fetchListProducts } from '../store/actions/listProductsActions'
import Page from './Page/Page'
import LoadingIndicator from '../components/LoadingIndicator'
import ProductsListHeader from '../components/ProductsListHeader'
import ProductsList from '../components/ProductsList'

class UserListPage extends Component {

  componentDidMount() {
    const { list, products, userListId } = this.props

    if (!list) {
      this.props.getUserList(userListId)
    }

    if (!products || !Object.keys(products).length) {
      this.props.fetchListProducts(userListId)
    }
  }

  render() {
    const { authentication: { token }, list, products } = this.props

    if (!token) {
      return <Redirect to="/" />
    }

    if (!list) {
      return <LoadingIndicator />
    }

    return (
      <Page className="UserListPage">
        <ProductsListHeader
          list={list}
          products={products}
        />
        {
          this.props.isLoadingListProducts
          ? <LoadingIndicator />
          : <ProductsList products={products} removable />
        }
      </Page>
    );
  }
}

UserListPage.propTypes = {
  authentication: PropTypes.object,
  list: PropTypes.object,
  products: PropTypes.object,
  userListId: PropTypes.string
}

const mapStateToProps = ({
  authentication,
  listProducts,
  myLists: { lists }
}, {
  match: { params: { userListId } }
}) => ({
  authentication,
  isLoadingListProducts: listProducts.loading,
  list: lists[userListId] || null,
  products: listProducts[userListId] || null,
  userListId
})

const mapDispatchToProps = {
  fetchListProducts,
  getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)