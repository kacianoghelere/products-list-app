import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { fetchProductsList, fetchProductsListNextPage } from '../store/actions'
import { resetProductsList } from '../store/actions/productsActions'
import Page from './Page/Page'
import LoadingIndicator from '../components/LoadingIndicator'
import ProductsListHeader from '../components/ProductsListHeader'
import ProductsList from '../components/ProductsList'
import ControlBar from '../components/ControlBar'

class UserListPage extends Component {

  constructor(props) {
    super(props)

    window.onscroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight) {
        this.props.fetchProductsListNextPage()
      }
    }, 300)
  }

  componentDidMount() {
    if (! Object.keys(this.props.products).length) {
      this.props.resetProductsList()

      this.props.fetchProductsList()
    }
  }

  render() {
    if (! this.props.authentication.token) {
      return <Redirect to="/" />
    }

    return (
      <Page className="UserListPage">
        <ProductsListHeader />
        <ControlBar />
        <ProductsList
          products={this.props.products}
          removable
        />
        {this.props.loadingProductsList ? <LoadingIndicator /> : null}
      </Page>
    );
  }
}

UserListPage.propTypes = {
  products: PropTypes.object.isRequired,
  fetchProductsList: PropTypes.func.isRequired
}

const mapStateToProps = ({
  authentication,
  loading: { loadingProductsList },
  products
}) => ({
  authentication,
  loadingProductsList,
  products
})

const mapDispatchToProps = {
  fetchProductsList,
  fetchProductsListNextPage,
  resetProductsList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)