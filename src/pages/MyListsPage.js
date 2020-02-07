import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import debounce from 'lodash.debounce'

import {
  fetchMyLists,
  fetchMyListsNextPage,
  resetMyLists
} from '../store/actions/myListsActions'
import Page from './Page/Page'
import LoadingIndicator from '../components/LoadingIndicator'
import UserLists from '../components/UserLists'

class MyListsPage extends Component {

  constructor(props) {
    super(props)

    window.onscroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight) {
        this.props.fetchMyListsNextPage()
      }
    }, 300)
  }

  componentDidMount() {
    if (! Object.keys(this.props.lists).length) {
      this.props.resetMyLists()

      this.props.fetchMyLists()
    }
  }

  render() {
    if (! this.props.authentication.token) {
      return <Redirect to="/" />
    }

    return (
      <Page className="MyListsPage">
        <UserLists lists={this.props.lists} />
        {this.props.isLoading ? <LoadingIndicator /> : null}
      </Page>
    );
  }
}

MyListsPage.propTypes = {
  lists: PropTypes.object.isRequired,
  fetchMyLists: PropTypes.func.isRequired,
  fetchMyListsNextPage: PropTypes.func.isRequired,
  resetMyLists: PropTypes.func.isRequired,
}

const mapStateToProps = ({
  authentication,
  myLists: { lists, pagination: { loading: isLoading } }
}) => ({
  authentication,
  isLoading,
  lists
})

const mapDispatchToProps = {
  fetchMyLists,
  fetchMyListsNextPage,
  resetMyLists
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListsPage)