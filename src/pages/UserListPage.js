import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { getUserList } from '../store/actions/myListsActions'
import { fetchListProducts } from '../store/actions/productsByListActions'
import Page from './Page/Page'
import Icon from '../components/Icon'
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

    const backLink = (
      <Link
        className="mx-3"
        to="/minhas-listas"
      >
        <Icon name="arrow-left" /> Voltar para minhas listas
      </Link>
    )

    return (
      <Page
        className="UserListPage"
        header={backLink}
      >
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
  productsByList: { listProducts, loading: isLoadingListProducts },
  myLists: { lists }
}, {
  match: { params: { userListId } }
}) => ({
  authentication,
  isLoadingListProducts,
  list: lists[userListId] || null,
  products: listProducts[userListId] || null,
  userListId
})

const mapDispatchToProps = {
  fetchListProducts,
  getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)