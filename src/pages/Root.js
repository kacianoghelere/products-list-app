import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginPage from './LoginPage'
import UserListPage from './UserListPage'

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/"
            component={LoginPage}
            exact
          />
        </Switch>
        <Switch>
          <Route
            path="/minha-lista"
            component={UserListPage}
            exact
          />
        </Switch>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root