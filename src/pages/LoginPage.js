import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setAuthToken, signIn } from '../store/actions/authenticationActions'
import Page from './Page/Page'
import SignInForm from '../components/SignInForm/SignInForm'

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  componentDidMount() {
    const authToken = localStorage.getItem('PRODUCT_LIST_AUTH_TOKEN')

    if (authToken) {
      this.props.setAuthToken(authToken)
    }
  }

  handleSignIn(params) {
    this.props.signIn(params)
  }

  render() {
    if (this.props.authentication.token) {
      return <Redirect to="/minhas-listas" />
    }

    return (
      <Page className="ProductsListPage">
        <SignInForm onSubmit={this.handleSignIn} />
      </Page>
    )
  }
}

SignInForm.propTypes = {
  authentication: PropTypes.object
}

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = {
  signIn,
  setAuthToken
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)