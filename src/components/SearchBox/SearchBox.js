import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchProductsList } from '../../store/actions'
import Icon from '../Icon'
import './SearchBox.scss'

let debounceId = null

class SearchBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchText: this.props.searchText
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({
      searchText: value
    })

    if (debounceId) {
      clearTimeout(debounceId)
    }

    debounceId = setTimeout(() => this.props.fetchProductsList(value), 300);
  }

  render() {
    return (
      <div className="SearchBox input-group flex-nowrap my-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search-indicator">
            <Icon name="search" aria-hidden="true" />
          </span>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Search for products here"
          aria-label="Search for products here"
          aria-describedby="search-indicator"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ pagination: { searchText } }) => ({ searchText })

const mapDispatchToProps = { fetchProductsList }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)